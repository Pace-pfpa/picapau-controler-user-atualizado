import { PrismaClient, Prisma } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';
import { IUserRepository } from '../UserRepository';
import { ICreateUserDTO } from '../../DTO/CreateUserDTO';
import { prismaClient } from '../../database/prismaClient';
import { hash } from 'bcrypt';


export class PostgreeUseRepository implements IUserRepository{
	async findByEmail(email: string): Promise<{ id: number; nome: string; email: string; password: string; }| null> {
		return await (await this.repository()).user.findFirst({
            where: {
                email: email
            }
        })
	}
	findByAll(): Promise<{ id: number; nome: string; email: string; password: string; }[]> {
		throw new Error('Method not implemented.');
	}
	async save(user: ICreateUserDTO): Promise<{ id: number; nome: string; email: string; password: string; }> {
		user.password = await hash(user.password, 8);
		const newUser = await (await this.repository()).user.create({
			data: user
		})
		return newUser;
		
	}
	findById(id: number): Promise<{ id: number; nome: string; email: string; password: string; }> {
		throw new Error('Method not implemented.');
	}
	delete(id: string): Promise<{ id: number; nome: string; email: string; password: string; }> {
		throw new Error('Method not implemented.');
	}

	async repository(): Promise<PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>> {
		return await prismaClient;
	}

}