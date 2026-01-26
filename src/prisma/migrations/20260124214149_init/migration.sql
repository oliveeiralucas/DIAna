-- CreateEnum
CREATE TYPE "TipoReuniao" AS ENUM ('VIRTUAL', 'PRESENCIAL');

-- CreateEnum
CREATE TYPE "StatusAta" AS ENUM ('PENDENTE', 'APROVADA', 'REJEITADA');

-- CreateTable
CREATE TABLE "usuario" (
    "id" UUID NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "nome" VARCHAR(255) NOT NULL,
    "senha" VARCHAR(255) NOT NULL,
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reuniao" (
    "id" UUID NOT NULL,
    "titulo" VARCHAR(500) NOT NULL,
    "tipo" "TipoReuniao" NOT NULL,
    "data_reuniao" TIMESTAMP(3) NOT NULL,
    "duracao_minutos" INTEGER,
    "link_meeting" TEXT,
    "arquivo_audio_base64" TEXT,
    "arquivo_audio_nome" VARCHAR(255),
    "arquivo_audio_tipo" VARCHAR(50),
    "arquivo_audio_tamanho" INTEGER,
    "criado_por_id" UUID,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "reuniao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "participante" (
    "id" UUID NOT NULL,
    "reuniao_id" UUID NOT NULL,
    "nome" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "participante_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ata" (
    "id" UUID NOT NULL,
    "reuniao_id" UUID NOT NULL,
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

-- CreateIndex
CREATE UNIQUE INDEX "usuario_email_key" ON "usuario"("email");

-- CreateIndex
CREATE INDEX "reuniao_data_reuniao_idx" ON "reuniao"("data_reuniao" DESC);

-- CreateIndex
CREATE INDEX "reuniao_tipo_idx" ON "reuniao"("tipo");

-- CreateIndex
CREATE INDEX "participante_reuniao_id_idx" ON "participante"("reuniao_id");

-- CreateIndex
CREATE UNIQUE INDEX "participante_reuniao_id_email_key" ON "participante"("reuniao_id", "email");

-- CreateIndex
CREATE UNIQUE INDEX "ata_reuniao_id_key" ON "ata"("reuniao_id");

-- CreateIndex
CREATE INDEX "ata_status_idx" ON "ata"("status");

-- AddForeignKey
ALTER TABLE "reuniao" ADD CONSTRAINT "reuniao_criado_por_id_fkey" FOREIGN KEY ("criado_por_id") REFERENCES "usuario"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "participante" ADD CONSTRAINT "participante_reuniao_id_fkey" FOREIGN KEY ("reuniao_id") REFERENCES "reuniao"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ata" ADD CONSTRAINT "ata_reuniao_id_fkey" FOREIGN KEY ("reuniao_id") REFERENCES "reuniao"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ata" ADD CONSTRAINT "ata_aprovado_por_id_fkey" FOREIGN KEY ("aprovado_por_id") REFERENCES "usuario"("id") ON DELETE SET NULL ON UPDATE CASCADE;
