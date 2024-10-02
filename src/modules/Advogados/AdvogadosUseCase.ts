import { IAdvogadoRepository } from '../../Repository/AdvogadoRepository';

export class AdvogadosUseCase {
	private advogadoRepository: IAdvogadoRepository;

	constructor(advogadoRepository: IAdvogadoRepository) {
		this.advogadoRepository = advogadoRepository;
	}

	async execute() {
		return await this.advogadoRepository.findAll();
	}

	async deletar(id: number) {
		return await this.advogadoRepository.delete(id);
	}
}