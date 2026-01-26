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

        // Obter data de 30 dias atrás
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

        // Estatísticas gerais
        const [
            totalAtas,
            atasPendentes,
            atasAprovadas,
            atasRejeitadas,
            atasRecentes,
        ] = await Promise.all([
            // Total de atas
            prisma.ata.count(),

            // Atas pendentes
            prisma.ata.count({
                where: { status: 'PENDENTE' }
            }),

            // Atas aprovadas
            prisma.ata.count({
                where: { status: 'APROVADA' }
            }),

            // Atas rejeitadas
            prisma.ata.count({
                where: { status: 'REJEITADA' }
            }),

            // Atas dos últimos 30 dias
            prisma.ata.count({
                where: {
                    createdAt: {
                        gte: thirtyDaysAgo
                    }
                }
            }),
        ]);

        // Atas por tipo
        const atasPorTipo = await prisma.ata.groupBy({
            by: ['tipo'],
            _count: {
                id: true
            }
        });

        // Atas por período (últimos 7 dias)
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

        const atasPorDia = await prisma.$queryRaw<Array<{ date: Date; count: bigint }>>`
            SELECT
                DATE(created_at) as date,
                COUNT(*) as count
            FROM ata
            WHERE created_at >= ${sevenDaysAgo}
            GROUP BY DATE(created_at)
            ORDER BY date ASC
        `;

        // Últimas 5 atas
        const ultimasAtas = await prisma.ata.findMany({
            take: 5,
            orderBy: {
                createdAt: 'desc'
            },
            select: {
                id: true,
                titulo: true,
                status: true,
                tipo: true,
                dataReuniao: true,
                createdAt: true,
            }
        });

        return NextResponse.json({
            success: true,
            data: {
                metricas: {
                    totalAtas,
                    atasPendentes,
                    atasAprovadas,
                    atasRejeitadas,
                    atasRecentes,
                },
                atasPorTipo: atasPorTipo.map(item => ({
                    tipo: item.tipo,
                    count: item._count.id
                })),
                atasPorDia: atasPorDia.map(item => ({
                    date: item.date,
                    count: Number(item.count)
                })),
                ultimasAtas,
            }
        }, { status: 200 });

    } catch (error) {
        console.error('Error fetching dashboard stats:', error);
        return NextResponse.json(
            { success: false, message: 'Erro ao buscar estatísticas' },
            { status: 500 }
        );
    }
}
