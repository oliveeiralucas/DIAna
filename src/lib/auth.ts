import { supabase } from './supabase';
import { User } from '@/types/auth';

const VALID_DOMAIN = '@ogrupoegx.com';

export function validateEmailDomain(email: string): boolean {
    return email.toLowerCase().endsWith(VALID_DOMAIN);
}

export async function getUserByEmail(email: string): Promise<User | null> {
    const { data: user } = await supabase
        .from('usuario')
        .select('id, email, nome, ativo')
        .eq('email', email.toLowerCase())
        .single();

    return user;
}

export async function getUserById(userId: string): Promise<User | null> {
    const { data: user } = await supabase
        .from('usuario')
        .select('id, email, nome, ativo')
        .eq('id', userId)
        .single();

    return user;
}

export function isUserActive(user: User): boolean {
    return user.ativo === true;
}