import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { validateAudioFile } from '@/lib/upload-utils';
import { triggerN8NTranscricao } from '@/lib/n8n-webhook';
import { UploadAudioResponse } from '@/types/upload';

// Função para estimar duração em minutos baseado no tamanho do arquivo
// MP3: ~1MB por minuto (aproximadamente)
function estimateDurationMinutes(fileSize: number, mimeType: string): number {
    const fileSizeMB = fileSize / (1024 * 1024);

    // Estimativas baseadas em bitrates típicos
    if (mimeType === 'audio/mpeg') { // MP3
        return Math.ceil(fileSizeMB); // ~1MB por minuto
    } else if (mimeType === 'audio/wav' || mimeType === 'audio/x-wav') { // WAV
        return Math.ceil(fileSizeMB / 10); // ~10MB por minuto
    } else if (mimeType === 'audio/mp4' || mimeType === 'audio/x-m4a') { // M4A
        return Math.ceil(fileSizeMB / 0.5); // ~0.5MB por minuto
    }

    return Math.ceil(fileSizeMB); // fallback
}

export async function POST(request: NextRequest) {
    try {
        // Verificar autenticação
        const userId = request.headers.get('x-user-id');
        if (!userId) {
            return NextResponse.json<UploadAudioResponse>(
                { success: false, message: 'Não autenticado' },
                { status: 401 }
            );
        }

        // Parse FormData
        const formData = await request.formData();
        const file = formData.get('audio') as File;
        const titulo = formData.get('titulo') as string;
        const dataReuniao = formData.get('dataReuniao') as string;
        const participantesJson = formData.get('participantes') as string;

        // Validações básicas
        if (!file) {
            return NextResponse.json<UploadAudioResponse>(
                { success: false, message: 'Nenhum arquivo enviado' },
                { status: 400 }
            );
        }

        if (!titulo || !dataReuniao) {
            return NextResponse.json<UploadAudioResponse>(
                { success: false, message: 'Título e data da reunião são obrigatórios' },
                { status: 400 }
            );
        }

        // Validar arquivo
        const validation = validateAudioFile(file);
        if (!validation.valid) {
            return NextResponse.json<UploadAudioResponse>(
                { success: false, message: validation.error },
                { status: 400 }
            );
        }

        // Parse participantes
        let participantes: Array<{ nome: string; email?: string }> = [];
        if (participantesJson) {
            try {
                participantes = JSON.parse(participantesJson);
            } catch (error) {
                console.error('Error parsing participantes:', error);
            }
        }

        // Converter arquivo para base64
        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        const base64Audio = buffer.toString('base64');

        // Estimar duração em minutos
        const duracaoMinutos = estimateDurationMinutes(file.size, file.type);

        // Criar reunião AUTOMATICAMENTE
        const reuniao = await prisma.reuniao.create({
            data: {
                titulo,
                tipo: 'PRESENCIAL', // Sempre presencial para upload
                dataReuniao: new Date(dataReuniao),
                duracaoMinutos, // Estimado baseado no tamanho do arquivo
                linkMeeting: null, // Reunião presencial não tem link
                criadoPorId: userId,
                participantes: {
                    create: participantes.map(p => ({
                        nome: p.nome,
                        email: p.email,
                    })),
                },
            },
        });

        // Criar transcrição com áudio em base64
        const transcricao = await prisma.transcricao.create({
            data: {
                reuniaoId: reuniao.id,
                conteudoTexto: '', // Será preenchido após transcrição
                status: 'PENDENTE',
                arquivoAudioBase64: base64Audio, // Armazenar base64
                arquivoAudioNome: file.name,
                arquivoAudioTipo: file.type,
                arquivoAudioTamanho: file.size,
            },
        });

        // Trigger webhook N8N com base64
        const webhookTriggered = await triggerN8NTranscricao({
            transcricaoId: transcricao.id,
            reuniaoId: reuniao.id,
            tipoReuniao: 'PRESENCIAL', // Sempre presencial
            audioBase64: base64Audio, // Enviar base64 para o N8N
            audioNome: file.name,
            audioTipo: file.type,
            audioTamanho: file.size,
            titulo: reuniao.titulo,
            dataReuniao: reuniao.dataReuniao.toISOString(),
            duracaoMinutos, // Duração estimada
            participantes,
        });

        if (!webhookTriggered) {
            console.warn('Webhook N8N não foi disparado com sucesso');
        }

        return NextResponse.json<UploadAudioResponse>(
            {
                success: true,
                message: 'Áudio enviado com sucesso',
                data: {
                    transcricaoId: transcricao.id,
                    reuniaoId: reuniao.id,
                    webhookTriggered,
                },
            },
            { status: 201 }
        );
    } catch (error) {
        console.error('Upload error:', error);
        return NextResponse.json<UploadAudioResponse>(
            {
                success: false,
                message: 'Erro ao fazer upload do áudio',
            },
            { status: 500 }
        );
    }
}