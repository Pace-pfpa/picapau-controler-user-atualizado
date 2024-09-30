/*
  Warnings:

  - Added the required column `regiao` to the `advogados` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Regiao" AS ENUM ('PRF1', 'PRF2', 'PRF3', 'PRF4', 'PRF5', 'PRF6');

-- AlterTable
ALTER TABLE "advogados" ADD COLUMN     "regiao" "Regiao" NOT NULL;
