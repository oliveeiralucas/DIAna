import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

// GET - Detalhes da ata (mantém igual)
export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        const userId = request.headers.get('x-user-id');

        if (!userId) {
            return NextResponse.json(
                { success: false, message: 'Não autenticado' },
                { status: 401 }
            );
        }

        const { data: ataRaw, error } = await supabase
            .from('ata')
            .select('*, aprovado_por:usuario!aprovado_por_id(nome, email)')
            .eq('id', id)
            .single();

        if (error || !ataRaw) {
            return NextResponse.json(
                { success: false, message: 'Ata não encontrada' },
                { status: 404 }
            );
        }

        // Transformar dados para camelCase
        const ata = {
            id: ataRaw.id,
            titulo: ataRaw.titulo,
            tipo: ataRaw.tipo,
            dataReuniao: ataRaw.data_reuniao,
            duracaoMinutos: ataRaw.duracao_minutos,
            participantes: ataRaw.participantes,
            objetivo: ataRaw.objetivo,
            topicosDiscutidos: ataRaw.topicos_discutidos,
            decisoes: ataRaw.decisoes,
            acoes: ataRaw.acoes,
            pendencias: ataRaw.pendencias,
            proximosPassos: ataRaw.proximos_passos,
            resumo: ataRaw.resumo,
            topicos: ataRaw.topicos,
            conteudoCompleto: ataRaw.conteudo_completo,
            status: ataRaw.status,
            comentarios: ataRaw.comentarios,
            dataAprovacao: ataRaw.data_aprovacao,
            createdAt: ataRaw.created_at,
            updatedAt: ataRaw.updated_at,
            aprovadoPor: ataRaw.aprovado_por,
        };

        return NextResponse.json(
            {
                success: true,
                data: ata,
            },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error fetching ata:', error);
        return NextResponse.json(
            { success: false, message: 'Erro ao buscar ata' },
            { status: 500 }
        );
    }
}

// PUT - Aprovar/Rejeitar ata
export async function PUT(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        const userId = request.headers.get('x-user-id');

        if (!userId) {
            return NextResponse.json(
                { success: false, message: 'Não autenticado' },
                { status: 401 }
            );
        }

        const body = await request.json();
        const {
            status,
            comentarios,
            // Campos editáveis de conteúdo
            titulo,
            tipo,
            dataReuniao,
            duracaoMinutos,
            participantes,
            objetivo,
            topicosDiscutidos,
            decisoes,
            acoes,
            pendencias,
            proximosPassos,
        } = body;

        // Buscar ata atual
        const { data: ataAtual, error: ataAtualError } = await supabase
            .from('ata')
            .select('status')
            .eq('id', id)
            .single();

        if (ataAtualError || !ataAtual) {
            return NextResponse.json(
                { success: false, message: 'Ata não encontrada' },
                { status: 404 }
            );
        }

        // Preparar dados para atualização
        const updateData: any = {};

        // Se está mudando status (aprovação/rejeição)
        if (status && ['APROVADA', 'REJEITADA'].includes(status)) {
            if (status === 'REJEITADA') {
                // NOVO: Deletar ata quando rejeitada
                const { error: deleteError } = await supabase
                    .from('ata')
                    .delete()
                    .eq('id', id);

                if (deleteError) {
                    throw new Error(deleteError.message);
                }

                // Opcional: Notificar N8N sobre a rejeição/deleção
                const webhookUrl = process.env.N8N_WEBHOOK_REJECTION_URL;
                if (webhookUrl) {
                    try {
                        await fetch(webhookUrl, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': process.env.N8N_WEBHOOK_SECRET
                                    ? `Bearer ${process.env.N8N_WEBHOOK_SECRET}`
                                    : '',
                            },
                            body: JSON.stringify({
                                ataId: id,
                                status: 'REJEITADA',
                                rejeitadoPorId: userId,
                                dataRejeicao: new Date().toISOString(),
                                comentarios: comentarios || null,
                            }),
                        });
                    } catch (webhookError) {
                        console.error('Error triggering N8N rejection webhook:', webhookError);
                        // Não falhar a requisição se o webhook falhar
                    }
                }

                return NextResponse.json(
                    {
                        success: true,
                        message: 'Ata rejeitada e removida com sucesso',
                    },
                    { status: 200 }
                );
            } else {
                // Lógica de aprovação (mantém como está)
                updateData.status = status;
                updateData.aprovado_por_id = userId;
                updateData.data_aprovacao = new Date().toISOString();
                updateData.comentarios = comentarios || null;
            }
        }
        // Se está editando conteúdo (apenas PENDENTE)
        else if (ataAtual.status === 'PENDENTE') {
            if (titulo !== undefined) updateData.titulo = titulo;
            if (tipo !== undefined) updateData.tipo = tipo;
            if (dataReuniao !== undefined) updateData.data_reuniao = new Date(dataReuniao).toISOString();
            if (duracaoMinutos !== undefined) updateData.duracao_minutos = duracaoMinutos;
            if (participantes !== undefined) updateData.participantes = participantes;
            if (objetivo !== undefined) updateData.objetivo = objetivo;
            if (topicosDiscutidos !== undefined) updateData.topicos_discutidos = topicosDiscutidos;
            if (decisoes !== undefined) updateData.decisoes = decisoes;
            if (acoes !== undefined) updateData.acoes = acoes;
            if (pendencias !== undefined) updateData.pendencias = pendencias;
            if (proximosPassos !== undefined) updateData.proximos_passos = proximosPassos;
        } else {
            return NextResponse.json(
                { success: false, message: 'Apenas atas PENDENTE podem ser editadas' },
                { status: 400 }
            );
        }

        // Atualizar ata
        const { data: ataRaw, error: updateError } = await supabase
            .from('ata')
            .update(updateData)
            .eq('id', id)
            .select()
            .single();

        if (updateError || !ataRaw) {
            throw new Error(updateError?.message || 'Erro ao atualizar ata');
        }

        // Transformar dados para camelCase
        const ata = {
            id: ataRaw.id,
            titulo: ataRaw.titulo,
            tipo: ataRaw.tipo,
            dataReuniao: ataRaw.data_reuniao,
            duracaoMinutos: ataRaw.duracao_minutos,
            participantes: ataRaw.participantes,
            objetivo: ataRaw.objetivo,
            topicosDiscutidos: ataRaw.topicos_discutidos,
            decisoes: ataRaw.decisoes,
            acoes: ataRaw.acoes,
            pendencias: ataRaw.pendencias,
            proximosPassos: ataRaw.proximos_passos,
            resumo: ataRaw.resumo,
            topicos: ataRaw.topicos,
            conteudoCompleto: ataRaw.conteudo_completo,
            status: ataRaw.status,
            comentarios: ataRaw.comentarios,
            dataAprovacao: ataRaw.data_aprovacao,
            createdAt: ataRaw.created_at,
            updatedAt: ataRaw.updated_at,
            aprovadoPorId: ataRaw.aprovado_por_id,
        };

        // Se APROVADA, chamar webhook do N8N
        if (status === 'APROVADA') {
            const webhookUrl = process.env.N8N_WEBHOOK_APPROVAL_URL;

            if (webhookUrl) {
                try {
                    await fetch(webhookUrl, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': process.env.N8N_WEBHOOK_SECRET
                                ? `Bearer ${process.env.N8N_WEBHOOK_SECRET}`
                                : '',
                        },
                        body: JSON.stringify({
                            ataId: id,
                            status: 'APROVADA',
                            aprovadoPorId: userId,
                            dataAprovacao: new Date().toISOString(),
                            comentarios: comentarios || null,
                        }),
                    });
                } catch (webhookError) {
                    console.error('Error triggering N8N approval webhook:', webhookError);
                    // Não falhar a requisição se o webhook falhar
                }
            }
        }

        return NextResponse.json(
            {
                success: true,
                message: `Ata ${status === 'APROVADA' ? 'aprovada' : 'rejeitada'} com sucesso`,
                data: ata,
            },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error updating ata:', error);
        return NextResponse.json(
            { success: false, message: 'Erro ao atualizar ata' },
            { status: 500 }
        );
    }
}