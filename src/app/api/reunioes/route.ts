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

        const reunioes = await prisma.reuniao.findMany({
            include: {
                criador: {
                    select: {
                        nome: true,
                        email: true,
                    },
                },
                participantes: {
                    select: {
                        id: true,
                        nome: true,
                        email: true,
                    },
                },
                transcricao: {
                    select: {
                        id: true,
                        status: true,
                        ata: {
                            select: {
                                id: true,
                                status: true,
                            },
                        },
                    },
                },
            },
            orderBy: {
                dataReuniao: 'desc',
            },
        });

        return NextResponse.json(
            {
                success: true,
                data: reunioes,
            },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error fetching reunioes:', error);
        return NextResponse.json(
            { success: false, message: 'Erro ao buscar reuniões' },
            { status: 500 }
        );
    }
}