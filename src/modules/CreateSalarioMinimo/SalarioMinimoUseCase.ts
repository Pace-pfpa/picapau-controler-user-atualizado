
import { ISalarioMinimoDTO } from '../../DTO/SalarioMinimoDTO';
import { ISMRepository } from '../../Repository/SMRepository';



export class SalarioMinimoUseCase {
	private smRepository: ISMRepository;
	//new 
	constructor(smRepository: ISMRepository){
		this.smRepository = smRepository;
	}
	async execute(sm: ISalarioMinimoDTO){
		return await this.smRepository.save(sm);
	}
}