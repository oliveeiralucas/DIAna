# DIAna - Documentação Inteligente de Áudios

<div align="center">

  ![DIAna Logo](./public/logos/diana-icon.svg)

  **Sistema interno de transcrição e geração automática de atas de reunião da EGX**

  [![Next.js](https://img.shields.io/badge/Next.js-16.1.4-black?style=flat-square&logo=next.js)](https://nextjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
  [![Prisma](https://img.shields.io/badge/Prisma-7.3.0-2D3748?style=flat-square&logo=prisma)](https://www.prisma.io/)
  [![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-336791?style=flat-square&logo=postgresql)](https://www.postgresql.org/)

</div>

---

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias](#-tecnologias)
- [Pré-requisitos](#-pré-requisitos)
- [Instalação](#-instalação)
- [Configuração](#-configuração)
- [Executando o Projeto](#-executando-o-projeto)
- [Estrutura de Pastas](#-estrutura-de-pastas)
- [API Endpoints](#-api-endpoints)
- [Integração N8N](#-integração-n8n)
- [Build e Deploy](#-build-e-deploy)
- [Banco de Dados](#-banco-de-dados)

---

## 🎯 Sobre o Projeto

**DIAna** (Documentação Inteligente de Áudios) é uma plataforma web desenvolvida para automatizar o processo de documentação de reuniões na EGX. O sistema permite que usuários façam upload de arquivos de áudio de reuniões e recebam automaticamente atas estruturadas e transcritas, reduzindo drasticamente o tempo gasto com documentação manual.

### Problema que Resolve

- ❌ **Antes:** Designar alguém para fazer anotações durante reuniões
- ❌ **Antes:** Perder pontos importantes da discussão
- ❌ **Antes:** Gastar horas formatando atas manualmente

- ✅ **Agora:** Upload simples de arquivo de áudio
- ✅ **Agora:** Transcrição automática com IA
- ✅ **Agora:** Ata estruturada gerada automaticamente

### Público-Alvo

Sistema interno restrito a colaboradores da EGX com email corporativo `@ogrupoegx.com`.

---

## ✨ Funcionalidades

### 🔐 Autenticação
- Login/Registro exclusivo para domínio `@ogrupoegx.com`
- Autenticação JWT com cookies seguros
- Validação de senha com indicador de força
- Middleware de autenticação automático

### 📤 Upload de Áudio
- Suporte para arquivos MP3, WAV e M4A (até 50MB)
- Armazenamento em Base64 no banco de dados
- Barra de progresso de upload em tempo real
- Validação de formato e tamanho de arquivo
- Metadados: título, data, tipo (virtual/presencial), participantes

### 📝 Geração de Atas
- Transcrição automática via integração N8N
- Estruturação inteligente de conteúdo:
  - Identificação da reunião
  - Objetivo
  - Tópicos discutidos
  - Decisões tomadas
  - Ações definidas
  - Pendências
  - Próximos passos
- Formatação profissional automática

### ✅ Workflow de Aprovação
- Status: PENDENTE, APROVADA, REJEITADA
- Revisão e edição de atas pendentes
- Aprovação com comentários
- Rejeição com deleção automática
- Histórico de aprovações

### 📊 Dashboard
- Métricas em tempo real:
  - Total de atas
  - Atas pendentes
  - Atas aprovadas
  - Distribuição por tipo (virtual/presencial)
- Gráficos interativos (Recharts)
- Lista de atas recentes
- Filtros por status e busca

### 🔍 Listagem e Busca
- Paginação eficiente
- Busca por título
- Filtros por status
- Ordenação por data
- Visualização detalhada de atas

---

## 🛠 Tecnologias

### Frontend
- **[Next.js 16](https://nextjs.org/)** - Framework React com SSR e API Routes
- **[React 19](https://react.dev/)** - Biblioteca UI
- **[TypeScript 5](https://www.typescriptlang.org/)** - Tipagem estática
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Framework CSS utility-first
- **[Radix UI](https://www.radix-ui.com/)** - Componentes acessíveis
- **[shadcn/ui](https://ui.shadcn.com/)** - Componentes UI reutilizáveis
- **[Recharts](https://recharts.org/)** - Gráficos e visualizações
- **[Sonner](https://sonner.emilkowal.ski/)** - Notificações toast
- **[React Hook Form](https://react-hook-form.com/)** - Gerenciamento de formulários
- **[date-fns](https://date-fns.org/)** - Manipulação de datas

### Backend
- **[Next.js API Routes](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)** - API REST
- **[Prisma ORM 7](https://www.prisma.io/)** - ORM TypeScript-first
- **[PostgreSQL 16](https://www.postgresql.org/)** - Banco de dados relacional
- **[Jose](https://github.com/panva/jose)** - JWT para autenticação
- **[bcryptjs](https://github.com/dcodeIO/bcrypt.js)** - Hash de senhas

### DevOps & Ferramentas
- **[ESLint](https://eslint.org/)** - Linter
- **[Turbopack](https://turbo.build/)** - Bundler ultra-rápido
- **[Git](https://git-scm.com/)** - Controle de versão

### Integrações Externas
- **[N8N](https://n8n.io/)** - Automação de workflows (transcrição e geração de atas)

---

## 📦 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** >= 18.0.0 ([Download](https://nodejs.org/))
- **npm** >= 9.0.0 (vem com Node.js)
- **PostgreSQL** >= 16.0 ([Download](https://www.postgresql.org/download/))
- **Git** ([Download](https://git-scm.com/))

---

## 🚀 Instalação

### 1. Clone o Repositório

```bash
git clone https://github.com/egx/diana.git
cd diana
```

### 2. Instale as Dependências

```bash
npm install
```

### 3. Configure o Banco de Dados

Crie um banco de dados PostgreSQL:

```sql
CREATE DATABASE diana_db;
```

---

## ⚙️ Configuração

### 1. Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
# Database
DATABASE_URL="postgresql://usuario:senha@localhost:5432/diana_db"

# JWT Secret (gere uma chave aleatória forte)
JWT_SECRET="sua-chave-secreta-muito-segura-aqui-min-32-chars"

# N8N Webhooks
N8N_WEBHOOK_URL="https://seu-n8n.com/webhook/transcricao"
N8N_WEBHOOK_SECRET="seu-token-n8n"
N8N_WEBHOOK_APPROVAL_URL="https://seu-n8n.com/webhook/aprovacao"
N8N_WEBHOOK_REJECTION_URL="https://seu-n8n.com/webhook/rejeicao"

# App
NEXT_PUBLIC_APP_URL="http://localhost:3000"
NODE_ENV="development"
```

### 2. Gerar Chave JWT Segura

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

### 3. Execute as Migrações do Banco

```bash
npx prisma migrate deploy
```

### 4. (Opcional) Gere o Prisma Client

```bash
npx prisma generate
```

---

## 🏃 Executando o Projeto

### Modo Desenvolvimento

```bash
npm run dev
```

Acesse: [http://localhost:3000](http://localhost:3000)

### Modo Produção

```bash
# Build
npm run build

# Start
npm run start
```

### Outros Comandos

```bash
# Linter
npm run lint

# Seed do banco (se houver)
npm run db:seed

# Prisma Studio (UI para visualizar banco)
npx prisma studio
```

---

## 📁 Estrutura de Pastas

```
diana/
├── public/                      # Arquivos estáticos
│   └── logos/                   # Logos e ícones
├── src/
│   ├── app/                     # App Router (Next.js 13+)
│   │   ├── (dashboard)/         # Grupo de rotas autenticadas
│   │   │   ├── dashboard/
│   │   │   │   ├── page.tsx     # Dashboard principal
│   │   │   │   ├── atas/
│   │   │   │   │   ├── page.tsx              # Lista de atas
│   │   │   │   │   ├── [id]/editar/page.tsx  # Editar ata
│   │   │   │   │   └── nova/page.tsx         # Nova ata manual
│   │   │   │   └── upload/page.tsx           # Upload de áudio
│   │   │   └── layout.tsx       # Layout autenticado
│   │   ├── api/                 # API Routes
│   │   │   ├── auth/            # Autenticação (login, register, me, logout)
│   │   │   ├── atas/            # CRUD de atas
│   │   │   ├── dashboard/       # Estatísticas do dashboard
│   │   │   └── webhooks/        # Webhooks N8N
│   │   ├── login/page.tsx       # Página de login
│   │   ├── cadastro/page.tsx    # Página de registro
│   │   ├── layout.tsx           # Layout raiz
│   │   └── globals.css          # Estilos globais
│   ├── components/
│   │   ├── ui/                  # Componentes UI (shadcn)
│   │   └── logo.tsx             # Componente do logo
│   ├── contexts/
│   │   └── auth-context.tsx     # Context de autenticação
│   ├── hooks/
│   │   └── use-audio-upload.ts  # Hook de upload de áudio
│   ├── lib/
│   │   ├── prisma.ts            # Cliente Prisma
│   │   ├── jwt.ts               # Funções JWT
│   │   ├── n8n-webhook.ts       # Cliente N8N
│   │   ├── password-validation.ts # Validação de senha
│   │   └── utils.ts             # Utilitários
│   ├── prisma/
│   │   ├── schema.prisma        # Schema do banco
│   │   ├── migrations/          # Migrações
│   │   └── generated/           # Cliente Prisma gerado
│   ├── types/
│   │   └── upload.ts            # Tipos TypeScript
│   └── proxy.ts                 # Middleware de autenticação
├── .env                         # Variáveis de ambiente (não commitado)
├── .gitignore
├── next.config.ts               # Configuração Next.js
├── tailwind.config.ts           # Configuração Tailwind
├── tsconfig.json                # Configuração TypeScript
├── package.json
└── README.md
```

---

## 🌐 API Endpoints

### Autenticação

| Método | Endpoint              | Descrição                    | Auth |
|--------|-----------------------|------------------------------|------|
| POST   | `/api/auth/register`  | Registrar novo usuário       | ❌   |
| POST   | `/api/auth/login`     | Login de usuário             | ❌   |
| GET    | `/api/auth/me`        | Dados do usuário autenticado | ✅   |
| POST   | `/api/auth/logout`    | Logout de usuário            | ✅   |

### Atas

| Método | Endpoint                      | Descrição                   | Auth |
|--------|-------------------------------|-----------------------------|------|
| GET    | `/api/atas`                   | Listar atas (paginado)      | ✅   |
| POST   | `/api/atas`                   | Criar ata manualmente       | ✅   |
| GET    | `/api/atas/[id]`              | Detalhes de uma ata         | ✅   |
| PUT    | `/api/atas/[id]`              | Atualizar/Aprovar/Rejeitar  | ✅   |
| GET    | `/api/atas/[id]/audio`        | Download do áudio original  | ✅   |
| POST   | `/api/atas/upload-audio`      | Upload de áudio para ata    | ✅   |

### Dashboard

| Método | Endpoint           | Descrição                     | Auth |
|--------|--------------------|-------------------------------|------|
| GET    | `/api/dashboard`   | Estatísticas do dashboard     | ✅   |

### Webhooks (N8N)

| Método | Endpoint                            | Descrição                    | Auth      |
|--------|-------------------------------------|------------------------------|-----------|
| POST   | `/api/webhooks/n8n/transcricao`    | Receber transcrição do N8N   | Bearer    |
| POST   | `/api/webhooks/n8n/create-ata`     | Receber ata gerada do N8N    | Bearer    |

---

## 🔗 Integração N8N

O DIAna se integra com o N8N para processamento assíncrono de transcrição e geração de atas.

### Fluxo de Integração

```
┌──────┐     ┌────────┐     ┌─────┐     ┌────┐
│ User │────▶│ DIAna  │────▶│ N8N │────▶│ AI │
└──────┘     └────────┘     └─────┘     └────┘
   │            │              │           │
   │         Salva          Processa    Transcreve
   │         áudio          workflow    + Estrutura
   │            │              │           │
   │            │◀─────────────┴───────────┘
   │            │        Ata estruturada
   │◀───────────┤
      Notificação
```

### Configuração N8N

1. **Webhook de Transcrição** (`N8N_WEBHOOK_URL`):
   - Recebe: `{ ataId, audioBase64, metadata }`
   - Retorna: Transcrição + Ata estruturada

2. **Webhook de Criação de Ata** (`/api/webhooks/n8n/create-ata`):
   - Recebe do N8N: Ata estruturada em JSON
   - Atualiza registro no banco

3. **Autenticação**:
   - Header: `Authorization: Bearer ${N8N_WEBHOOK_SECRET}`

### Exemplo de Payload N8N → DIAna

```json
{
  "ataId": "uuid-da-ata",
  "identificacao": {
    "titulo": "Reunião de Planejamento Q1",
    "data": "2026-01-26",
    "participantes": ["João Silva", "Maria Santos"]
  },
  "objetivo": "Definir metas para o primeiro trimestre",
  "topicosDiscutidos": [
    {
      "topico": "Metas de Vendas",
      "descricao": "Discussão sobre targets...",
      "responsavel": "João Silva"
    }
  ],
  "decisoes": ["Aumentar budget em 20%"],
  "acoes": [
    {
      "acao": "Criar planilha de metas",
      "responsavel": "Maria Santos",
      "prazo": "2026-02-01"
    }
  ],
  "pendencias": [],
  "proximosPassos": {
    "atividades": ["Revisar planilha"],
    "proxima_reuniao": "2026-02-15"
  }
}
```

---

## 🏗 Build e Deploy

### Build de Produção

```bash
# Gerar build otimizado
npm run build

# Testar build localmente
npm run start
```

### Deploy (Vercel)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

**Variáveis de Ambiente na Vercel:**
- Configure todas as variáveis do `.env` no painel da Vercel
- Adicione `DATABASE_URL` com string de conexão do PostgreSQL em produção

### Deploy (Docker)

```dockerfile
# Exemplo de Dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npx prisma generate
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
```

---

## 🗄 Banco de Dados

### Schema Simplificado

**Tabelas:**
- `usuario` - Usuários do sistema
- `ata` - Atas de reunião (consolidado com áudio e participantes)

### Migrações

```bash
# Criar nova migration
npx prisma migrate dev --name nome_da_migration

# Aplicar migrations em produção
npx prisma migrate deploy

# Resetar banco (CUIDADO!)
npx prisma migrate reset
```

### Prisma Studio

Interface visual para visualizar e editar dados:

```bash
npx prisma studio
```

Acesse: [http://localhost:5555](http://localhost:5555)

---

## 🔒 Segurança

- ✅ Autenticação JWT com cookies HttpOnly
- ✅ Hash bcrypt para senhas (salt rounds: 10)
- ✅ Middleware de autenticação em todas as rotas privadas
- ✅ Validação de domínio de email (@ogrupoegx.com)
- ✅ Validação de força de senha
- ✅ Bearer token para webhooks N8N
- ✅ Sanitização de inputs
- ✅ CORS configurado

---

## 📝 Licença

Este é um projeto proprietário da **EGX**. Todos os direitos reservados.

---

## 👥 Equipe

Desenvolvido por [EGX Tech Team](https://ogrupoegx.com)

---

## 📞 Suporte

Para dúvidas ou problemas:
- 📧 Email: suporte@ogrupoegx.com
- 🎫 Issues: [GitHub Issues](https://github.com/egx/diana/issues)

---

<div align="center">

  **DIAna** - Transformando reuniões em documentação inteligente 🎯

  Feito com ❤️ pela equipe EGX

</div>
