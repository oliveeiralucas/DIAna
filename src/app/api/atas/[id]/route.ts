import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET - Detalhes da ata
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

        const ata = await prisma.ata.findUnique({
            where: { id },
            include: {
                transcricao: {
                    include: {
                        reuniao: {
                            include: {
                                criador: {
                                    select: {
                                        nome: true,
                                        email: true,
                                    },
                                },
                                participantes: true,
                            },
                        },
                    },
                },
                aprovadoPor: {
                    select: {
                        nome: true,
                        email: true,
                    },
                },
            },
        });

        if (!ata) {
            return NextResponse.json(
                { success: false, message: 'Ata não encontrada' },
                { status: 404 }
            );
        }

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
        const { status, comentarios } = body;

        if (!['APROVADA', 'REJEITADA'].includes(status)) {
            return NextResponse.json(
                { success: false, message: 'Status inválido' },
                { status: 400 }
            );
        }

        const ata = await prisma.ata.update({
            where: { id },
            data: {
                status,
                aprovadoPorId: userId,
                dataAprovacao: new Date(),
                comentarios: comentarios || null,
            },
        });

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