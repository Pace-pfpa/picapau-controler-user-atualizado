import { Request, Response } from 'express';
import { CreateAdvogadoUseCase } from './CreateAdvogadoUseCase';

export class CreateAdvogadoController {
	constructor(private createAdvogadoUseCase: CreateAdvogadoUseCase) {}

	async handle(request: Request, response: Response) {
		const {nome, oab, local, comunicadopor, regiao, adicionadopor} = request.body;
		try {
			const advogado = await this.createAdvogadoUseCase.execute({
				nome, oab, local, comunicadopor, regiao, adicionadopor
			});
			if (advogado instanceof Error) {
				return response.status(400).json('Erro ao adicionar advogado');
			}
			return response.status(201).json(advogado);
		} catch (error) {
			return response.status(400).json(error);
		}
	}
}