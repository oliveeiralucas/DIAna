import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;

        // Verificar autenticação
        const userId = request.headers.get('x-user-id');
        if (!userId) {
            return NextResponse.json(
                { success: false, message: 'Não autenticado' },
                { status: 401 }
            );
        }

        // Buscar transcrição com áudio em base64
        const transcricao = await prisma.transcricao.findUnique({
            where: { reuniaoId: id },
            select: {
                arquivoAudioBase64: true,
                arquivoAudioNome: true,
                arquivoAudioTipo: true,
            },
        });

        if (!transcricao || !transcricao.arquivoAudioBase64) {
            return NextResponse.json(
                { success: false, message: 'Áudio não encontrado' },
                { status: 404 }
            );
        }

        // Converter base64 de volta para buffer
        const audioBuffer = Buffer.from(transcricao.arquivoAudioBase64, 'base64');
        const uint8Array = new Uint8Array(audioBuffer);

        // Retornar arquivo
        return new NextResponse(uint8Array, {
            status: 200,
            headers: {
                'Content-Type': transcricao.arquivoAudioTipo || 'audio/mpeg',
                'Content-Disposition': `attachment; filename="${transcricao.arquivoAudioNome || 'audio.mp3'}"`,
                'Content-Length': audioBuffer.length.toString(),
            },
        });
    } catch (error) {
        console.error('Download error:', error);
        return NextResponse.json(
            { success: false, message: 'Erro ao baixar áudio' },
            { status: 500 }
        );
    }
}