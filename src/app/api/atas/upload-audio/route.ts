import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { validateAudioFile } from '@/lib/upload-utils';
import { triggerN8NTranscricao } from '@/lib/n8n-webhook';
import { UploadAudioResponse } from '@/types/upload';

function estimateDurationMinutes(fileSize: number, mimeType: string): number {
    const fileSizeMB = fileSize / (1024 * 1024);

    if (mimeType === 'audio/mpeg') {
        return Math.ceil(fileSizeMB);
    } else if (mimeType === 'audio/wav' || mimeType === 'audio/x-wav') {
        return Math.ceil(fileSizeMB / 10);
    } else if (mimeType === 'audio/mp4' || mimeType === 'audio/x-m4a') {
        return Math.ceil(fileSizeMB / 0.5);
    }

    return Math.ceil(fileSizeMB);
}

export async function POST(request: NextRequest) {
    try {
        const userId = request.headers.get('x-user-id');
        if (!userId) {
            return NextResponse.json<UploadAudioResponse>(
                { success: false, message: 'Não autenticado' },
                { status: 401 }
            );
        }

        const formData = await request.formData();
        const file = formData.get('audio') as File;
        const titulo = formData.get('titulo') as string;
        const dataReuniao = formData.get('dataReuniao') as string;
        const participantesJson = formData.get('participantes') as string;

        if (!file || !titulo || !dataReuniao) {
            return NextResponse.json<UploadAudioResponse>(
                { success: false, message: 'Campos obrigatórios não preenchidos' },
                { status: 400 }
            );
        }

        const validation = validateAudioFile(file);
        if (!validation.valid) {
            return NextResponse.json<UploadAudioResponse>(
                { success: false, message: validation.error },
                { status: 400 }
            );
        }

        let participantes: Array<{ nome: string; email?: string }> = [];
        if (participantesJson) {
            try {
                participantes = JSON.parse(participantesJson);
            } catch (error) {
                console.error('Error parsing participantes:', error);
            }
        }

        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        const base64Audio = buffer.toString('base64');
        const duracaoMinutos = estimateDurationMinutes(file.size, file.type);

        // Criar Ata diretamente com áudio embutido
        const ata = await prisma.ata.create({
            data: {
                titulo,
                tipo: 'PRESENCIAL',
                dataReuniao: new Date(dataReuniao),
                duracaoMinutos,
                arquivoAudioBase64: base64Audio,
                arquivoAudioNome: file.name,
                arquivoAudioTipo: file.type,
                arquivoAudioTamanho: file.size,
                participantes: participantes,
                status: 'PENDENTE',
            },
        });

        // Trigger webhook N8N com ataId
        const webhookTriggered = await triggerN8NTranscricao({
            ataId: ata.id,
            tipo: 'PRESENCIAL',
            audioBase64: base64Audio,
            audioNome: file.name,
            audioTipo: file.type,
            audioTamanho: file.size,
            titulo: ata.titulo,
            dataReuniao: ata.dataReuniao.toISOString(),
            duracaoMinutos,
            participantes,
        });

        return NextResponse.json<UploadAudioResponse>(
            {
                success: true,
                message: 'Áudio enviado com sucesso',
                data: {
                    ataId: ata.id,
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
