export interface User {
    id: string;
    email: string;
    nome: string;
    ativo: boolean;
}

export interface LoginRequest {
    email: string;
    password: string;
}

export interface LoginResponse {
    success: boolean;
    message?: string;
    data?: {
        user: User;
        token: string;
    };
}

export interface JWTPayload {
    userId: string;
    email: string;
    iat?: number;
    exp?: number;
}