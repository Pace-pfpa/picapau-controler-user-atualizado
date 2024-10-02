import { Request, Response } from 'express';
import { BuscaAdvogadoUseCase } from './BuscaAdvogadoUseCase';
import { Regiao } from '@prisma/client';

export class BuscaAdvogadoController {
	constructor(private buscaAdvogadoUseCase: BuscaAdvogadoUseCase) {}

	async handle(request: Request, response: Response) {
		const {regiao} = request.query;
		try {
			const advogado = await this.buscaAdvogadoUseCase.execute(regiao as Regiao);
			if (!advogado || advogado.length === 0) {
				return response.status(404).json('Nenhum advogado encontrado para esta região');
			}
			return response.status(200).json(advogado);
		} catch (error) {
			return response.status(400).json(error);
		}
	}
}