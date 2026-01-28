import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: NextRequest) {
    try {
        const userId = request.headers.get('x-user-id');
        if (!userId) {
            return NextResponse.json(
                { success: false, message: 'Não autenticado' },
                { status: 401 }
            );
        }

        const body = await request.json();
        const {
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

        if (!titulo || !tipo || !dataReuniao) {
            return NextResponse.json(
                { success: false, message: 'Campos obrigatórios não preenchidos (titulo, tipo, dataReuniao)' },
                { status: 400 }
            );
        }

        const { data: ata, error } = await supabase
            .from('ata')
            .insert({
                titulo,
                tipo,
                data_reuniao: new Date(dataReuniao).toISOString(),
                duracao_minutos: duracaoMinutos,
                participantes: participantes || [],
                objetivo,
                topicos_discutidos: topicosDiscutidos,
                decisoes,
                acoes,
                pendencias,
                proximos_passos: proximosPassos,
                status: 'PENDENTE',
            })
            .select()
            .single();

        if (error || !ata) {
            throw new Error(error?.message || 'Erro ao criar ata');
        }

        return NextResponse.json(
            {
                success: true,
                message: 'Ata criada com sucesso',
                data: ata,
            },
            { status: 201 }
        );
    } catch (error) {
        console.error('Error creating ata:', error);
        return NextResponse.json(
            { success: false, message: 'Erro ao criar ata' },
            { status: 500 }
        );
    }
}

export async function GET(request: NextRequest) {
    try {
        const userId = request.headers.get('x-user-id');
        if (!userId) {
            return NextResponse.json(
                { success: false, message: 'Não autenticado' },
                { status: 401 }
            );
        }

        const searchParams = request.nextUrl.searchParams;

        // Paginação
        const page = parseInt(searchParams.get('page') || '1');
        const limit = parseInt(searchParams.get('limit') || '10');
        const skip = (page - 1) * limit;

        // Filtros
        const statusParam = searchParams.get('status');
        const validStatuses = ['PENDENTE', 'APROVADA', 'REJEITADA'];
        const status = statusParam && validStatuses.includes(statusParam)
            ? statusParam as 'PENDENTE' | 'APROVADA' | 'REJEITADA'
            : null;
        const search = searchParams.get('search');

        // Construir where clause
        const where: any = {};

        if (status) {
            where.status = status;
        }

        if (search) {
            where.titulo = {
                contains: search,
                mode: 'insensitive',
            };
        }

        // Construir query para atas
        let query = supabase
            .from('ata')
            .select('*, aprovado_por:usuario!aprovado_por_id(nome, email)');

        // Aplicar filtros
        if (status) {
            query = query.eq('status', status);
        }

        if (search) {
            query = query.ilike('titulo', `%${search}%`);
        }

        // Aplicar ordenação e paginação
        query = query
            .order('created_at', { ascending: false })
            .range(skip, skip + limit - 1);

        const { data: atasRaw, error: atasError } = await query;

        if (atasError) {
            throw new Error(atasError.message);
        }

        // Transformar dados para camelCase
        const atas = atasRaw?.map(ata => ({
            id: ata.id,
            titulo: ata.titulo,
            tipo: ata.tipo,
            dataReuniao: ata.data_reuniao,
            duracaoMinutos: ata.duracao_minutos,
            participantes: ata.participantes,
            objetivo: ata.objetivo,
            topicosDiscutidos: ata.topicos_discutidos,
            decisoes: ata.decisoes,
            acoes: ata.acoes,
            pendencias: ata.pendencias,
            proximosPassos: ata.proximos_passos,
            resumo: ata.resumo,
            topicos: ata.topicos,
            conteudoCompleto: ata.conteudo_completo,
            status: ata.status,
            comentarios: ata.comentarios,
            dataAprovacao: ata.data_aprovacao,
            createdAt: ata.created_at,
            updatedAt: ata.updated_at,
            aprovadoPor: ata.aprovado_por,
        }));

        // Buscar contagem total
        let countQuery = supabase
            .from('ata')
            .select('*', { count: 'exact', head: true });

        if (status) {
            countQuery = countQuery.eq('status', status);
        }

        if (search) {
            countQuery = countQuery.ilike('titulo', `%${search}%`);
        }

        const { count: total } = await countQuery;

        const totalPages = Math.ceil((total || 0) / limit);

        return NextResponse.json(
            {
                success: true,
                data: atas,
                pagination: {
                    page,
                    limit,
                    total,
                    totalPages,
                },
            },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error fetching atas:', error);
        return NextResponse.json(
            { success: false, message: 'Erro ao buscar atas' },
            { status: 500 }
        );
    }
}