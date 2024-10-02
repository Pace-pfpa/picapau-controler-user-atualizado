import { Request, Response } from 'express';
import { AdvogadosUseCase } from './AdvogadosUseCase';

export class AdvogadosController {
	constructor(private advogadosUseCase: AdvogadosUseCase) {}

	async handle(request: Request, response: Response) {

		try {
			const advogado = await this.advogadosUseCase.execute();
			if (!advogado || advogado.length === 0) {
				return response.status(404).json('Erro ao buscar advogado!');
			}
			return response.status(200).json(advogado);
		} catch (error) {
			return response.status(400).json(error);
		}
	}

	async handleDelete(request: Request, response: Response) {
		const { id } = request.params;
		try {
			const advogadoId = parseInt(id, 10);
			const advogado = await this.advogadosUseCase.deletar(advogadoId);

			if (!advogado) {
				return response.status(404).json({ message: 'Advogado não encontrado' });
			}
	
			return response.status(200).json({ message: 'Advogado excluído com sucesso', advogado });
		} catch (error) {
			return response.status(500).json({ message: 'Erro ao excluir advogado', error });
		}
	}
}