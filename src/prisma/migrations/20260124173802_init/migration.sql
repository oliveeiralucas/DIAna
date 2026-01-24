/*
  Warnings:

  - You are about to drop the `clickup_integracao` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "clickup_integracao" DROP CONSTRAINT "clickup_integracao_ata_id_fkey";

-- DropIndex
DROP INDEX "ata_acoes_idx";

-- DropIndex
DROP INDEX "ata_decisoes_idx";

-- DropIndex
DROP INDEX "ata_topicos_idx";

-- DropIndex
DROP INDEX "usuario_email_idx";

-- AlterTable
ALTER TABLE "ata" ALTER COLUMN "id" DROP DEFAULT;

-- AlterTable
ALTER TABLE "participante" ALTER COLUMN "id" DROP DEFAULT;

-- AlterTable
ALTER TABLE "reuniao" ALTER COLUMN "id" DROP DEFAULT;

-- AlterTable
ALTER TABLE "transcricao" ALTER COLUMN "id" DROP DEFAULT;

-- AlterTable
ALTER TABLE "usuario" ALTER COLUMN "id" DROP DEFAULT;

-- DropTable
DROP TABLE "clickup_integracao";

-- DropEnum
DROP TYPE "StatusClickUp";
