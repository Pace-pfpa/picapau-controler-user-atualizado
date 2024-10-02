import { PrismaClient, Prisma, Advogado, Regiao } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';
import { IAdvogadoRepository } from '../AdvogadoRepository';
import { ICreateAdvogadoDTO } from '../../DTO/AdvogadoDTO';
import { prismaClient } from '../../database/prismaClient';

export class PostgreAdvogadoRepository implements IAdvogadoRepository {
	async findByRegiao(regiao: Regiao): Promise<Advogado[] | null> {
		return await (await this.repository()).advogado.findMany({
			where: {
				regiao: regiao
			}
		});
	}

	findByAll(): Promise<Advogado[]> {
		throw new Error('Method not implemented.');
	}

	async save(advogado: ICreateAdvogadoDTO): Promise<Advogado> {
		const newAdvogado = await (await this.repository()).advogado.create({
			data: advogado,
		});
		return newAdvogado;
	}

	findById(id: number): Promise<Advogado> {
		throw new Error('Method not implemented.');
	}
	delete(id: string): Promise<Advogado> {
		throw new Error('Method not implemented.');
	}
	
	async findByOAB(oab: string): Promise<Advogado | null> {
		return await (await this.repository()).advogado.findFirst({
			where: {
				oab: oab
			}
		});
	}

	async repository(): Promise<PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>> {
		return await prismaClient;
	}
}