import { createClient } from '@supabase/supabase-js';

// ========================================
// SUPABASE CLIENT CONFIGURATION
// ========================================

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

if (!supabaseUrl || !supabaseServiceRoleKey) {
  throw new Error(
    'Missing Supabase environment variables. Please check SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in .env'
  );
}

// ========================================
// ADMIN CLIENT (Backend Only)
// ========================================
// Este cliente usa service_role key para bypass RLS
// NUNCA exponha este cliente para o frontend
// Usar apenas em API routes e server components

export const supabase = createClient(supabaseUrl, supabaseServiceRoleKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
});

// ========================================
// TYPE DEFINITIONS
// ========================================

export type TipoReuniao = 'VIRTUAL' | 'PRESENCIAL';
export type StatusAta = 'PENDENTE' | 'APROVADA' | 'REJEITADA';

export interface Usuario {
  id: string;
  email: string;
  nome: string;
  senha: string;
  ativo: boolean;
  created_at: string;
}

export interface Ata {
  id: string;
  titulo: string;
  tipo: TipoReuniao;
  data_reuniao: string;
  duracao_minutos: number | null;
  participantes: Array<{
    nome: string;
    email?: string;
  }> | null;
  identificacao: any | null;
  objetivo: string | null;
  topicos_discutidos: Array<{
    topico: string;
    detalhes: string;
  }> | null;
  decisoes: Array<{
    decisao: string;
    responsavel?: string;
  }> | null;
  acoes: Array<{
    acao: string;
    responsavel?: string;
    prazo?: string;
  }> | null;
  pendencias: Array<{
    pendencia: string;
    responsavel?: string;
  }> | null;
  proximos_passos: {
    atividades?: string[];
    proxima_reuniao?: {
      data: string;
      pauta: string;
    };
  } | null;
  status: StatusAta;
  aprovado_por_id: string | null;
  data_aprovacao: string | null;
  comentarios: string | null;
  created_at: string;
  updated_at: string;
}

// ========================================
// HELPER FUNCTIONS
// ========================================

/**
 * Helper para formatar erros do Supabase de forma consistente
 */
export function formatSupabaseError(error: any): string {
  if (!error) return 'Erro desconhecido';

  if (error.message) return error.message;
  if (error.error_description) return error.error_description;
  if (typeof error === 'string') return error;

  return JSON.stringify(error);
}

/**
 * Helper para verificar se uma query retornou resultados
 */
export function hasResults<T>(data: T[] | null): data is T[] {
  return data !== null && data.length > 0;
}
