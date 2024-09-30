import { PrismaClient, Processo } from '@prisma/client';
import { IProcessDTO } from '../DTO/ProcessDTO';

export interface ProcessRepository{
    save(process: IProcessDTO): Promise<Processo>;
    findAll(id: number, date?: Date, status?: string): Promise<Processo[]>;
    deleteById(id: number): Promise<Processo>;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    deleteAll(id: number): Promise<any>
    repository(): Promise<PrismaClient>
}