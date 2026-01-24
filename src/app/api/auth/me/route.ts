import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from '@/lib/jwt';
import { getUserById } from '@/lib/auth';

export async function GET(request: NextRequest) {
    try {
        // Pegar token do cookie
        const token = request.cookies.get('auth-token')?.value;

        if (!token) {
            return NextResponse.json(
                { success: false, message: 'Não autenticado' },
                { status: 401 }
            );
        }

        // Verificar token
        const payload = await verifyToken(token);

        if (!payload) {
            return NextResponse.json(
                { success: false, message: 'Token inválido' },
                { status: 401 }
            );
        }

        // Buscar usuário
        const user = await getUserById(payload.userId);

        if (!user || !user.ativo) {
            return NextResponse.json(
                { success: false, message: 'Usuário não encontrado ou inativo' },
                { status: 404 }
            );
        }

        return NextResponse.json(
            {
                success: true,
                data: { user },
            },
            { status: 200 }
        );
    } catch (error) {
        console.error('Get current user error:', error);
        return NextResponse.json(
            { success: false, message: 'Erro interno do servidor' },
            { status: 500 }
        );
    }
}