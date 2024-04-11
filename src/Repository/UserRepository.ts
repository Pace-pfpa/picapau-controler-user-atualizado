
import { PrismaClient, User } from '@prisma/client';
import { ICreateUserDTO } from '../DTO/CreateUserDTO';


export interface IUserRepository{
    findByEmail(email: string): Promise<User | null>;
    findByAll(): Promise<User[]>
    save(user: ICreateUserDTO): Promise<User>;
    findById(id: number): Promise<User>;
    delete(id: string): Promise<User>;
    repository(): Promise<PrismaClient>
}