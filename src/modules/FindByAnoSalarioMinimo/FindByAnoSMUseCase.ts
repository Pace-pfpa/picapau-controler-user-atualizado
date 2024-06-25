
import { ISMRepository } from '../../Repository/SMRepository';


export class FindByAnoSMUseCase {
	private smRepository: ISMRepository;
	//new 
	constructor(smRepository: ISMRepository){
		this.smRepository = smRepository;
	}
	async execute(ano: string){
		return await this.smRepository.findBySM(ano);
	}
}