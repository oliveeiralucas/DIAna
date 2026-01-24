export interface Reuniao {
    id: string;
    titulo: string;
    tipo: 'VIRTUAL' | 'PRESENCIAL';
    dataReuniao: Date;
    duracaoMinutos?: number;
    linkMeeting?: string;
    criadoPorId?: string;
    createdAt: Date;
    criador?: {
        nome: string;
        email: string;
    };
    participantes?: Array<{
        id: string;
        nome: string;
        email?: string;
    }>;
    transcricao?: {
        id: string;
        status: string;
        ata?: {
            id: string;
            status: string;
        };
    };
}

export interface Ata {
    id: string;
    transcricaoId: string;
    resumo?: string;
    topicos?: any;
    decisoes?: any;
    acoes?: any;
    conteudoCompleto: string;
    status: 'PENDENTE' | 'APROVADA' | 'REJEITADA';
    aprovadoPorId?: string;
    dataAprovacao?: Date;
    comentarios?: string;
    createdAt: Date;
    updatedAt: Date;
    transcricao?: {
        reuniao: Reuniao;
    };
    aprovadoPor?: {
        nome: string;
        email: string;
    };
}