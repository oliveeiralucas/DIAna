import { NextRequest, NextResponse } from 'next/server';
import { validateEmailDomain } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';
import { getPasswordErrorMessage } from '@/lib/password-validation';

interface RegisterRequest {
    email: string;
    nome: string;
    senha: string;
}

export async function POST(request: NextRequest) {
    try {
        const body: RegisterRequest = await request.json();
        const { email, nome, senha } = body;

        // Validações básicas
        if (!email || !nome || !senha) {
            return NextResponse.json(
                {
                    success: false,
                    message: 'Email, nome e senha são obrigatórios',
                },
                { status: 400 }
            );
        }

        // Validar domínio
        if (!validateEmailDomain(email)) {
            return NextResponse.json(
                {
                    success: false,
                    message: 'Apenas emails @ogrupoegx.com são permitidos',
                },
                { status: 403 }
            );
        }

        // Validar força da senha
        const passwordError = getPasswordErrorMessage(senha);
        if (passwordError) {
            return NextResponse.json(
                {
                    success: false,
                    message: passwordError,
                },
                { status: 400 }
            );
        }

        // Verificar se usuário já existe
        const existingUser = await prisma.usuario.findUnique({
            where: { email: email.toLowerCase() },
        });

        if (existingUser) {
            return NextResponse.json(
                {
                    success: false,
                    message: 'Email já cadastrado',
                },
                { status: 409 }
            );
        }

        // Hash da senha
        const senhaHash = await bcrypt.hash(senha, 10);

        // Criar usuário
        const user = await prisma.usuario.create({
            data: {
                email: email.toLowerCase(),
                nome,
                senha: senhaHash,
                ativo: true,
            },
            select: {
                id: true,
                email: true,
                nome: true,
                ativo: true,
            },
        });

        return NextResponse.json(
            {
                success: true,
                message: 'Usuário cadastrado com sucesso',
                data: { user },
            },
            { status: 201 }
        );
    } catch (error) {
        console.error('Register error:', error);
        return NextResponse.json(
            {
                success: false,
                message: 'Erro interno do servidor',
            },
            { status: 500 }
        );
    }
}