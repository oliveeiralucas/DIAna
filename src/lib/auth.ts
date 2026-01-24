import { prisma } from './prisma';
import { User } from '@/types/auth';

const VALID_DOMAIN = '@ogrupoegx.com';

export function validateEmailDomain(email: string): boolean {
    return email.toLowerCase().endsWith(VALID_DOMAIN);
}

export async function getUserByEmail(email: string): Promise<User | null> {
    const user = await prisma.usuario.findUnique({
        where: { email: email.toLowerCase() },
        select: {
            id: true,
            email: true,
            nome: true,
            ativo: true,
        },
    });

    return user;
}

export async function getUserById(userId: string): Promise<User | null> {
    const user = await prisma.usuario.findUnique({
        where: { id: userId },
        select: {
            id: true,
            email: true,
            nome: true,
            ativo: true,
        },
    });

    return user;
}

export function isUserActive(user: User): boolean {
    return user.ativo === true;
}