import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

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

        const ata = await prisma.ata.create({
            data: {
                titulo,
                tipo,
                dataReuniao: new Date(dataReuniao),
                duracaoMinutos,
                participantes: participantes || [],
                objetivo,
                topicosDiscutidos,
                decisoes,
                acoes,
                pendencias,
                proximosPassos,
                status: 'PENDENTE',
            },
        });

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

        // Buscar atas com contagem total
        const [atas, total] = await Promise.all([
            prisma.ata.findMany({
                where,
                include: {
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
                skip,
                take: limit,
            }),
            prisma.ata.count({ where }),
        ]);

        const totalPages = Math.ceil(total / limit);

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