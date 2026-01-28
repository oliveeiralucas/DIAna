import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

// Configurar cache no servidor - revalida a cada 60 segundos
export const revalidate = 60;

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
            { count: totalAtas },
            { count: atasPendentes },
            { count: atasAprovadas },
            { count: atasRejeitadas },
            { count: atasRecentes },
        ] = await Promise.all([
            // Total de atas
            supabase.from('ata').select('*', { count: 'exact', head: true }),

            // Atas pendentes
            supabase.from('ata').select('*', { count: 'exact', head: true }).eq('status', 'PENDENTE'),

            // Atas aprovadas
            supabase.from('ata').select('*', { count: 'exact', head: true }).eq('status', 'APROVADA'),

            // Atas rejeitadas
            supabase.from('ata').select('*', { count: 'exact', head: true }).eq('status', 'REJEITADA'),

            // Atas dos últimos 30 dias
            supabase
                .from('ata')
                .select('*', { count: 'exact', head: true })
                .gte('created_at', thirtyDaysAgo.toISOString()),
        ]);

        // Atas por tipo
        const [
            { count: virtualCount },
            { count: presencialCount },
        ] = await Promise.all([
            supabase.from('ata').select('*', { count: 'exact', head: true }).eq('tipo', 'VIRTUAL'),
            supabase.from('ata').select('*', { count: 'exact', head: true }).eq('tipo', 'PRESENCIAL'),
        ]);

        const atasPorTipo = [
            { tipo: 'VIRTUAL', count: virtualCount || 0 },
            { tipo: 'PRESENCIAL', count: presencialCount || 0 },
        ].filter(item => item.count > 0);

        // Atas por período (últimos 7 dias)
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

        const { data: atasLast7Days } = await supabase
            .from('ata')
            .select('created_at')
            .gte('created_at', sevenDaysAgo.toISOString());

        // Agrupar por dia no JavaScript
        const atasPorDiaMap = new Map<string, number>();
        atasLast7Days?.forEach(ata => {
            const date = new Date(ata.created_at).toISOString().split('T')[0];
            atasPorDiaMap.set(date, (atasPorDiaMap.get(date) || 0) + 1);
        });

        const atasPorDia = Array.from(atasPorDiaMap.entries())
            .map(([date, count]) => ({ date, count }))
            .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

        // Últimas 5 atas
        const { data: ultimasAtasRaw } = await supabase
            .from('ata')
            .select('id, titulo, status, tipo, data_reuniao, created_at')
            .order('created_at', { ascending: false })
            .limit(5);

        const ultimasAtas = ultimasAtasRaw?.map(ata => ({
            id: ata.id,
            titulo: ata.titulo,
            status: ata.status,
            tipo: ata.tipo,
            dataReuniao: ata.data_reuniao,
            createdAt: ata.created_at
        }));

        return NextResponse.json({
            success: true,
            data: {
                metricas: {
                    totalAtas: totalAtas || 0,
                    atasPendentes: atasPendentes || 0,
                    atasAprovadas: atasAprovadas || 0,
                    atasRejeitadas: atasRejeitadas || 0,
                    atasRecentes: atasRecentes || 0,
                },
                atasPorTipo,
                atasPorDia,
                ultimasAtas: ultimasAtas || [],
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
