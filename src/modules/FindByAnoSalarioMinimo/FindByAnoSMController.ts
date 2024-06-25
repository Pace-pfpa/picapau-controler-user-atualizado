import { Request, Response } from 'express';
import { FindByAnoSMUseCase } from './FindByAnoSMUseCase';


export class FindByAnoSMController {
	constructor(private findByAnoUseCase: FindByAnoSMUseCase){}
	async handle(request: Request, response: Response){
		const {ano} = request.params;

		try{
			const getValor = await this.findByAnoUseCase.execute(ano);
			
			return response.status(200).json(getValor);
		}catch(error){
			return response.status(400).json('Erro');
		}
	}
}

