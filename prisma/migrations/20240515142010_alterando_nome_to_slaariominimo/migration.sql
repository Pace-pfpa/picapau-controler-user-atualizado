/*
  Warnings:

  - You are about to drop the `salarioMinimo` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "salarioMinimo";

-- CreateTable
CREATE TABLE "salariominimo" (
    "id" SERIAL NOT NULL,
    "ano" TIMESTAMP(3) NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "salariominimo_pkey" PRIMARY KEY ("id")
);
