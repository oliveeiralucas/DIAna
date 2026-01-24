/*
  Warnings:

  - You are about to drop the column `tipo` on the `usuario` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "usuario" DROP COLUMN "tipo";

-- DropEnum
DROP TYPE "TipoUsuario";
