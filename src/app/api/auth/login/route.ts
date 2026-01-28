import { NextRequest, NextResponse } from 'next/server';
import { validateEmailDomain, isUserActive } from '@/lib/auth';
import { signToken } from '@/lib/jwt';
import { LoginRequest, LoginResponse } from '@/types/auth';
import { supabase } from '@/lib/supabase';
import bcrypt from 'bcryptjs';

export async function POST(request: NextRequest) {
    try {
        const body: LoginRequest = await request.json();
        const { email, password } = body;

        // Validações básicas
        if (!email || !password) {
            return NextResponse.json<LoginResponse>(
                {
                    success: false,
                    message: 'Email e senha são obrigatórios',
                },
                { status: 400 }
            );
        }

        // Validar domínio
        if (!validateEmailDomain(email)) {
            return NextResponse.json<LoginResponse>(
                {
                    success: false,
                    message: 'Apenas emails @ogrupoegx.com são permitidos',
                },
                { status: 403 }
            );
        }

        // Buscar usuário com senha
        const { data: userWithPassword, error } = await supabase
            .from('usuario')
            .select('*')
            .eq('email', email.toLowerCase())
            .single();

        if (error || !userWithPassword) {
            return NextResponse.json<LoginResponse>(
                {
                    success: false,
                    message: 'Email ou senha incorretos',
                },
                { status: 401 }
            );
        }

        // Verificar senha
        const isPasswordValid = await bcrypt.compare(password, userWithPassword.senha);

        if (!isPasswordValid) {
            return NextResponse.json<LoginResponse>(
                {
                    success: false,
                    message: 'Email ou senha incorretos',
                },
                { status: 401 }
            );
        }

        // Verificar se usuário está ativo
        if (!userWithPassword.ativo) {
            return NextResponse.json<LoginResponse>(
                {
                    success: false,
                    message: 'Usuário inativo. Entre em contato com o administrador.',
                },
                { status: 403 }
            );
        }

        // Remover senha do objeto de retorno
        const user = {
            id: userWithPassword.id,
            email: userWithPassword.email,
            nome: userWithPassword.nome,
            ativo: userWithPassword.ativo,
        };

        // Gerar token JWT
        const token = await signToken({
            userId: user.id,
            email: user.email,
        });

        // Retornar sucesso
        const response = NextResponse.json<LoginResponse>(
            {
                success: true,
                data: {
                    user,
                    token,
                },
            },
            { status: 200 }
        );

        // Definir cookie httpOnly
        response.cookies.set('auth-token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 7 * 24 * 60 * 60, // 7 dias
            path: '/',
        });

        return response;
    } catch (error) {
        console.error('Login error:', error);
        return NextResponse.json<LoginResponse>(
            {
                success: false,
                message: 'Erro interno do servidor',
            },
            { status: 500 }
        );
    }
}