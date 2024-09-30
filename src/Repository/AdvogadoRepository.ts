
import { PrismaClient, Advogado } from '@prisma/client';
import { ICreateAdvogadoDTO } from '../DTO/AdvogadoDTO';

export interface IAdvogadoRepository{
    findByOAB(oab: string): Promise<Advogado | null>;
    findByAll(): Promise<Advogado[]>
    save(advogado: ICreateAdvogadoDTO): Promise<Advogado>;
    findById(id: number): Promise<Advogado>;
    delete(id: string): Promise<Advogado>;
    findByNome(nome: string): Promise<Advogado | null>;
    repository(): Promise<PrismaClient>
}