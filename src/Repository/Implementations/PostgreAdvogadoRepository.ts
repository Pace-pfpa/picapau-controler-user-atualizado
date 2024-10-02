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

	async findAll(): Promise<Advogado[]> {
		return await (await this.repository()).advogado.findMany();
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

	async delete(id: number): Promise<Advogado> {
		return await (await this.repository()).advogado.delete({
			where: {
				id: id
			}
		});
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