
import { PrismaClient, Advogado, Regiao } from '@prisma/client';
import { ICreateAdvogadoDTO } from '../DTO/AdvogadoDTO';

export interface IAdvogadoRepository {
    findByOAB(oab: string): Promise<Advogado | null>;
    findByAll(): Promise<Advogado[]>
    save(advogado: ICreateAdvogadoDTO): Promise<Advogado>;
    findById(id: number): Promise<Advogado>;
    delete(id: string): Promise<Advogado>;
    findByRegiao(regiao: Regiao): Promise<Advogado[] | null>;
    repository(): Promise<PrismaClient>
}