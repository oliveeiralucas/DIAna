-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- CreateEnum
CREATE TYPE "TipoUsuario" AS ENUM ('ADMINISTRADOR', 'APROVADOR', 'CONSULTOR');

-- CreateEnum
CREATE TYPE "TipoReuniao" AS ENUM ('VIRTUAL', 'PRESENCIAL');

-- CreateEnum
CREATE TYPE "StatusTranscricao" AS ENUM ('PENDENTE', 'PROCESSANDO', 'CONCLUIDA', 'ERRO');

-- CreateEnum
CREATE TYPE "StatusAta" AS ENUM ('PENDENTE', 'APROVADA', 'REJEITADA');

-- CreateEnum
CREATE TYPE "StatusClickUp" AS ENUM ('PENDENTE', 'SINCRONIZADO', 'ERRO');

-- CreateTable
CREATE TABLE "usuario" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "email" VARCHAR(255) NOT NULL,
    "nome" VARCHAR(255) NOT NULL,
    "tipo" "TipoUsuario" NOT NULL DEFAULT 'CONSULTOR',
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "usuario_pkey" PRIMARY KEY ("id"),
    CONSTRAINT "chk_email_egx" CHECK (email LIKE '%@ogrupoegx.com')
);

-- CreateTable
CREATE TABLE "reuniao" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "titulo" VARCHAR(500) NOT NULL,
    "tipo" "TipoReuniao" NOT NULL,
    "data_reuniao" TIMESTAMP(3) NOT NULL,
    "duracao_minutos" INTEGER,
    "link_meeting" TEXT,
    "criado_por_id" UUID,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "reuniao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "participante" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "reuniao_id" UUID NOT NULL,
    "nome" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "participante_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "transcricao" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "reuniao_id" UUID NOT NULL,
    "conteudo_texto" TEXT NOT NULL,
    "status" "StatusTranscricao" NOT NULL DEFAULT 'PENDENTE',
    "arquivo_audio_path" TEXT,
    "servico_usado" VARCHAR(100),
    "erro_mensagem" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "transcricao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ata" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "transcricao_id" UUID NOT NULL,
    "resumo" TEXT,
    "topicos" JSONB,
    "decisoes" JSONB,
    "acoes" JSONB,
    "conteudo_completo" TEXT NOT NULL,
    "status" "StatusAta" NOT NULL DEFAULT 'PENDENTE',
    "aprovado_por_id" UUID,
    "data_aprovacao" TIMESTAMP(3),
    "comentarios" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ata_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "clickup_integracao" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "ata_id" UUID NOT NULL,
    "task_id" VARCHAR(100),
    "url_task" TEXT,
    "status" "StatusClickUp" NOT NULL DEFAULT 'PENDENTE',
    "erro_mensagem" TEXT,
    "sincronizado_em" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "clickup_integracao_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuario_email_key" ON "usuario"("email");

-- CreateIndex
CREATE INDEX "usuario_email_idx" ON "usuario"("email");

-- CreateIndex
CREATE INDEX "reuniao_data_reuniao_idx" ON "reuniao"("data_reuniao" DESC);

-- CreateIndex
CREATE INDEX "reuniao_tipo_idx" ON "reuniao"("tipo");

-- CreateIndex
CREATE INDEX "participante_reuniao_id_idx" ON "participante"("reuniao_id");

-- CreateIndex
CREATE UNIQUE INDEX "participante_reuniao_id_email_key" ON "participante"("reuniao_id", "email");

-- CreateIndex
CREATE UNIQUE INDEX "transcricao_reuniao_id_key" ON "transcricao"("reuniao_id");

-- CreateIndex
CREATE INDEX "transcricao_status_idx" ON "transcricao"("status");

-- CreateIndex
CREATE UNIQUE INDEX "ata_transcricao_id_key" ON "ata"("transcricao_id");

-- CreateIndex
CREATE INDEX "ata_status_idx" ON "ata"("status");

-- CreateIndex
CREATE INDEX "ata_topicos_idx" ON "ata" USING GIN ("topicos");

-- CreateIndex
CREATE INDEX "ata_decisoes_idx" ON "ata" USING GIN ("decisoes");

-- CreateIndex
CREATE INDEX "ata_acoes_idx" ON "ata" USING GIN ("acoes");

-- CreateIndex
CREATE UNIQUE INDEX "clickup_integracao_ata_id_key" ON "clickup_integracao"("ata_id");

-- AddForeignKey
ALTER TABLE "reuniao" ADD CONSTRAINT "reuniao_criado_por_id_fkey" FOREIGN KEY ("criado_por_id") REFERENCES "usuario"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "participante" ADD CONSTRAINT "participante_reuniao_id_fkey" FOREIGN KEY ("reuniao_id") REFERENCES "reuniao"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transcricao" ADD CONSTRAINT "transcricao_reuniao_id_fkey" FOREIGN KEY ("reuniao_id") REFERENCES "reuniao"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ata" ADD CONSTRAINT "ata_transcricao_id_fkey" FOREIGN KEY ("transcricao_id") REFERENCES "transcricao"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ata" ADD CONSTRAINT "ata_aprovado_por_id_fkey" FOREIGN KEY ("aprovado_por_id") REFERENCES "usuario"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "clickup_integracao" ADD CONSTRAINT "clickup_integracao_ata_id_fkey" FOREIGN KEY ("ata_id") REFERENCES "ata"("id") ON DELETE CASCADE ON UPDATE CASCADE;