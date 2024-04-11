import { PrismaClient, Prisma } from "@prisma/client";
import { DefaultArgs } from "@prisma/client/runtime/library";
import { IProcessDTO } from "../../DTO/ProcessDTO";
import { ProcessRepository } from "../ProcessRepository";
import { prismaClient } from "../../database/prismaClient";
import { processosFiltrados } from "../../Help/processosFiltrados";
import { processosFiltradosComStatus } from "../../Help/processosFiltradosComStatus";

export class PostgreeProcessRepository implements ProcessRepository{
    async save(process: IProcessDTO): Promise<{ id: number; nup: string; dia: Date; hora: string; statusProcess: string; userId: number; tarefadId: string}> {
        console.log(process)
        return await (await this.repository()).processo.create({
            data: process
        })
    }
    async findAll(id: number, date: Date, status?: string): Promise<{ id: number; nup: string; dia: Date; hora: string; statusProcess: string; userId: number; tarefadId: string }[]> {
        const process0s =  await (await this.repository()).processo.findMany({
            where: {
                userId: id
            }
        })


        if(!status || Number(status) == 0) return processosFiltrados(process0s,date);


        return processosFiltradosComStatus(process0s,date, status)
        
    }
    deleteById(id: string): Promise<{ id: number; nome: string; nup: string; dia: Date; hora: string; statusProcess: string; userId: number; tarefadId: string }> {
        throw new Error("Method not implemented.");
    }
    deleteAll(): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    async repository(): Promise<PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>> {
        return await prismaClient;
    }

}