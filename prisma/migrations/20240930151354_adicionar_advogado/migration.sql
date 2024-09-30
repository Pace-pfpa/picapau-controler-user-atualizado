-- CreateTable
CREATE TABLE "advogados" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "oab" TEXT NOT NULL,
    "local" TEXT NOT NULL,
    "comunicadopor" TEXT NOT NULL,
    "adicionadopor" INTEGER NOT NULL,

    CONSTRAINT "advogados_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "advogados" ADD CONSTRAINT "advogados_adicionadopor_fkey" FOREIGN KEY ("adicionadopor") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
