/*
  Warnings:

  - Added the required column `tarefadId` to the `processos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "processos" ADD COLUMN     "tarefadId" TEXT NOT NULL;
