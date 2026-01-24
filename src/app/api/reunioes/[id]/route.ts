import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET - Detalhes da reunião
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

        const reuniao = await prisma.reuniao.findUnique({
            where: { id },
            include: {
                criador: {
                    select: {
                        id: true,
                        nome: true,
                        email: true,
                    },
                },
                participantes: true,
                transcricao: {
                    include: {
                        ata: {
                            include: {
                                aprovadoPor: {
                                    select: {
                                        nome: true,
                                        email: true,
                                    },
                                },
                            },
                        },
                    },
                },
            },
        });

        if (!reuniao) {
            return NextResponse.json(
                { success: false, message: 'Reunião não encontrada' },
                { status: 404 }
            );
        }

        return NextResponse.json(
            {
                success: true,
                data: reuniao,
            },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error fetching reuniao:', error);
        return NextResponse.json(
            { success: false, message: 'Erro ao buscar reunião' },
            { status: 500 }
        );
    }
}

// PUT - Atualizar reunião
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
        const { titulo, dataReuniao, duracaoMinutos, participantes } = body;

        // Atualizar reunião
        const reuniao = await prisma.reuniao.update({
            where: { id },
            data: {
                titulo,
                dataReuniao: dataReuniao ? new Date(dataReuniao) : undefined,
                duracaoMinutos,
            },
        });

        // Atualizar participantes se fornecido
        if (participantes && Array.isArray(participantes)) {
            // Remover participantes antigos
            await prisma.participante.deleteMany({
                where: { reuniaoId: id },
            });

            // Criar novos participantes
            if (participantes.length > 0) {
                await prisma.participante.createMany({
                    data: participantes.map((p: any) => ({
                        reuniaoId: id,
                        nome: p.nome,
                        email: p.email,
                    })),
                });
            }
        }

        return NextResponse.json(
            {
                success: true,
                message: 'Reunião atualizada com sucesso',
                data: reuniao,
            },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error updating reuniao:', error);
        return NextResponse.json(
            { success: false, message: 'Erro ao atualizar reunião' },
            { status: 500 }
        );
    }
}

// DELETE - Deletar reunião
export async function DELETE(
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

        // Verificar se reunião existe
        const reuniao = await prisma.reuniao.findUnique({
            where: { id },
        });

        if (!reuniao) {
            return NextResponse.json(
                { success: false, message: 'Reunião não encontrada' },
                { status: 404 }
            );
        }

        // Deletar reunião (cascade vai deletar transcrição, ata, participantes)
        await prisma.reuniao.delete({
            where: { id },
        });

        return NextResponse.json(
            {
                success: true,
                message: 'Reunião deletada com sucesso',
            },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error deleting reuniao:', error);
        return NextResponse.json(
            { success: false, message: 'Erro ao deletar reunião' },
            { status: 500 }
        );
    }
}