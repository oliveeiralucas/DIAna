import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

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
        const status = searchParams.get('status') as 'PENDENTE' | 'APROVADA' | 'REJEITADA' | null;

        const atas = await prisma.ata.findMany({
            where: status ? { status } : undefined,
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
            orderBy: {
                createdAt: 'desc',
            },
        });

        return NextResponse.json(
            {
                success: true,
                data: atas,
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