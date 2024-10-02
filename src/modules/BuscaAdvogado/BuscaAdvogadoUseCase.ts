import { Regiao } from '@prisma/client';
import { IAdvogadoRepository } from '../../Repository/AdvogadoRepository';

export class BuscaAdvogadoUseCase {
	private advogadoRepository: IAdvogadoRepository;

	constructor(advogadoRepository: IAdvogadoRepository) {
		this.advogadoRepository = advogadoRepository;
	}

	async execute(regiao: Regiao) {
		return await this.advogadoRepository.findByRegiao(regiao);
	}
}