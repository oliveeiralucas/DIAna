import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const userId = request.headers.get('x-user-id');
        if (!userId) {
            return NextResponse.json(
                { success: false, message: 'Não autenticado' },
                { status: 401 }
            );
        }

        const { id } = await params;

        const ata = await prisma.ata.findUnique({
            where: { id },
            select: {
                arquivoAudioBase64: true,
                arquivoAudioNome: true,
                arquivoAudioTipo: true,
            },
        });

        if (!ata) {
            return NextResponse.json(
                { success: false, message: 'Ata não encontrada' },
                { status: 404 }
            );
        }

        if (!ata.arquivoAudioBase64) {
            return NextResponse.json(
                { success: false, message: 'Ata não possui arquivo de áudio' },
                { status: 404 }
            );
        }

        // Decodificar base64 para buffer
        const audioBuffer = Buffer.from(ata.arquivoAudioBase64, 'base64');

        // Retornar como stream de áudio
        return new NextResponse(audioBuffer, {
            status: 200,
            headers: {
                'Content-Type': ata.arquivoAudioTipo || 'audio/mpeg',
                'Content-Disposition': `attachment; filename="${ata.arquivoAudioNome || 'audio.mp3'}"`,
                'Content-Length': audioBuffer.length.toString(),
            },
        });
    } catch (error) {
        console.error('Error downloading audio:', error);
        return NextResponse.json(
            { success: false, message: 'Erro ao baixar áudio' },
            { status: 500 }
        );
    }
}
