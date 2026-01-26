import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyToken } from '@/lib/jwt';

// Rotas que NÃO precisam de autenticação
const publicRoutes = [
  '/login',
  '/cadastro',
  '/api/auth/login',
  '/api/auth/register',
  '/api/webhooks/n8n',  // N8N webhooks (têm sua própria autenticação via Bearer token)
];

export async function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Permitir acesso a rotas públicas
    if (publicRoutes.some(route => pathname.startsWith(route))) {
        return NextResponse.next();
    }

    // Redirecionar / para /dashboard
    if (pathname === '/') {
        return NextResponse.redirect(new URL('/dashboard', request.url));
    }

    // Verificar token
    const token = request.cookies.get('auth-token')?.value;

    if (!token) {
        // Se for API, retornar 401
        if (pathname.startsWith('/api/')) {
            return NextResponse.json(
                { success: false, message: 'Não autenticado' },
                { status: 401 }
            );
        }

        // Se for página, redirecionar para login
        const loginUrl = new URL('/login', request.url);
        loginUrl.searchParams.set('redirect', pathname);
        return NextResponse.redirect(loginUrl);
    }

    // Validar token
    const payload = await verifyToken(token);

    if (!payload) {
        // Token inválido
        const response = pathname.startsWith('/api/')
            ? NextResponse.json(
                { success: false, message: 'Token inválido' },
                { status: 401 }
            )
            : NextResponse.redirect(new URL('/login', request.url));

        // Remover cookie inválido
        response.cookies.delete('auth-token');
        return response;
    }

    // Token válido - adicionar informações do usuário aos headers
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-user-id', payload.userId);
    requestHeaders.set('x-user-email', payload.email);

    return NextResponse.next({
        request: {
            headers: requestHeaders,
        },
    });
}

export const config = {
    matcher: [
        '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    ],
};