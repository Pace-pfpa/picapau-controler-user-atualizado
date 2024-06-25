import { PrismaClient, Prisma } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';
import { ISalarioMinimoDTO } from '../../DTO/SalarioMinimoDTO';
import { ISMRepository } from '../SMRepository';
import { prismaClient } from '../../database/prismaClient';

export class PostgreSMRepository implements ISMRepository {
	async findBySM(ano: string): Promise<{ id: number; ano: string; valor: string; }[]> {
		console.log(ano);
		return await (await this.repository()).salarioMinimo.findMany({
			where: {
				ano: ano
			}
		});
	}
	async findByAll(): Promise<{ id: number; ano: string; valor: string; }[]> {
		return await (await this.repository()).salarioMinimo.findMany();
	}
	async save(salarioMinimo: ISalarioMinimoDTO): Promise<{ id: number; ano: string; valor: string; }> {

		const newSM = await (await this.repository()).salarioMinimo.create({
			data: salarioMinimo
		});
		return newSM;

	}
	/*
	findById(id: number): Promise<{ id: number; ano: Date; valor: number; }> {
		throw new Error("Method not implemented.");
	}
	delete(id: string): Promise<{ id: number; ano: Date; valor: number; }> {
		throw new Error("Method not implemented.");
	}
		*/
	async repository(): Promise<PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>> {
		return await prismaClient;
	}
	
}