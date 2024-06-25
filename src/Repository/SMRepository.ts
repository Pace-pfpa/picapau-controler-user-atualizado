
import { PrismaClient, salarioMinimo } from '@prisma/client';
import { ISalarioMinimoDTO } from '../DTO/SalarioMinimoDTO';


export interface ISMRepository {
    findBySM(ano: string): Promise<salarioMinimo[]>;
    findByAll(): Promise<salarioMinimo[]>
    save(salarioMinimo: ISalarioMinimoDTO): Promise<salarioMinimo>;
    //findById(id: number): Promise<salarioMinimo>;
    //delete(id: string): Promise<salarioMinimo>;
    repository(): Promise<PrismaClient>
}