-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "processos" (
    "id" SERIAL NOT NULL,
    "nup" TEXT NOT NULL,
    "dia" TIMESTAMP(3) NOT NULL,
    "hora" TEXT NOT NULL,
    "statusProcess" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "tarefadId" TEXT NOT NULL,

    CONSTRAINT "processos_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "processos" ADD CONSTRAINT "processos_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
