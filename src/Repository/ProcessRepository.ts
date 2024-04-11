import { PrismaClient, Processo } from "@prisma/client";
import { IProcessDTO } from "../DTO/ProcessDTO";

export interface ProcessRepository{
    save(process: IProcessDTO): Promise<Processo>;
    findAll(id: number, date?: Date, status?: string): Promise<Processo[]>;
    deleteById(id: string): Promise<Processo>;
    deleteAll(): Promise<boolean>
    repository(): Promise<PrismaClient>
}