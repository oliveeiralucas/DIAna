-- AlterTable
ALTER TABLE "transcricao" ADD COLUMN     "arquivo_audio" BYTEA,
ADD COLUMN     "arquivo_audio_nome" VARCHAR(255),
ADD COLUMN     "arquivo_audio_tamanho" INTEGER,
ADD COLUMN     "arquivo_audio_tipo" VARCHAR(50);
