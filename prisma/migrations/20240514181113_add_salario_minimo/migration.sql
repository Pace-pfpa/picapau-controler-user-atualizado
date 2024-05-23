-- CreateTable
CREATE TABLE "salarioMinimo" (
    "id" SERIAL NOT NULL,
    "ano" TIMESTAMP(3) NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "salarioMinimo_pkey" PRIMARY KEY ("id")
);
