import { ICreateAdvogadoDTO } from '../../DTO/AdvogadoDTO';
import { IAdvogadoRepository } from '../../Repository/AdvogadoRepository';

export class CreateAdvogadoUseCase {
	private advogadoRepository: IAdvogadoRepository;

	constructor(advogadoRepository: IAdvogadoRepository) {
		this.advogadoRepository = advogadoRepository;
	}

	async execute(advogado: ICreateAdvogadoDTO) {
		const advogadoExiste = await this.advogadoRepository.findByOAB(advogado.oab);
		if(advogadoExiste) return new Error('Advogado ja existe');
		return await this.advogadoRepository.save(advogado);
	}
}