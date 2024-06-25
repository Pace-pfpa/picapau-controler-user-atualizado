import { Request, Response } from 'express';
import { SalarioMinimoUseCase } from './SalarioMinimoUseCase';


export class SalarioMinimoController {
	constructor(private salarioMinimoUseCase: SalarioMinimoUseCase){}
	async handle(request: Request, response: Response){
		const {ano, valor} = request.body;
		try{
			const novoAno = await this.salarioMinimoUseCase.execute({ano, valor});
			
			return response.status(201).json(novoAno);
		}catch(error){
			return response.status(400).json('Erro');
		}
	}
}

