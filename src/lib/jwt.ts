import { SignJWT, jwtVerify } from 'jose';
import { JWTPayload } from '@/types/auth';

const JWT_SECRET = new TextEncoder().encode(
    process.env.JWT_SECRET || 'fallback-secret-change-in-production'
);

const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '7d';

// Converter tempo para segundos
const getExpirationTime = (expiresIn: string): number => {
    const unit = expiresIn.slice(-1);
    const value = parseInt(expiresIn.slice(0, -1));

    switch (unit) {
        case 'd': return value * 24 * 60 * 60;
        case 'h': return value * 60 * 60;
        case 'm': return value * 60;
        default: return 7 * 24 * 60 * 60; // 7 dias padrão
    }
};

export async function signToken(payload: Omit<JWTPayload, 'iat' | 'exp'>): Promise<string> {
    const token = await new SignJWT(payload as Record<string, unknown>)
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime(Math.floor(Date.now() / 1000) + getExpirationTime(JWT_EXPIRES_IN))
        .sign(JWT_SECRET);

    return token;
}

export async function verifyToken(token: string): Promise<JWTPayload | null> {
    try {
        const { payload } = await jwtVerify(token, JWT_SECRET);

        // Verificar se tem os campos necessários
        if (
            typeof payload.userId === 'string' &&
            typeof payload.email === 'string'
        ) {
            return {
                userId: payload.userId,
                email: payload.email,
                iat: payload.iat,
                exp: payload.exp,
            };
        }

        return null;
    } catch (error) {
        console.error('Token verification failed:', error);
        return null;
    }
}