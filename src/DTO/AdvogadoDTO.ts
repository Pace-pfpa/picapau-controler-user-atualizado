import { Regiao } from '@prisma/client';

export interface ICreateAdvogadoDTO {
    nome: string;
    oab: string;
    local: string;
    regiao: Regiao,
    comunicadopor: string,   
    adicionadopor: number
} 