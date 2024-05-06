import { Request, Response } from 'express';
import { UpdatePasswordUseCase } from './UpdatePasswordUseCase';

export class UpdatePasswordController{
	constructor(private updatePasswordUseCase: UpdatePasswordUseCase){}
	async handle(request: Request, response: Response){
		const {cpf, password} = request.body;
		try{
			const novoFilme = await this.updatePasswordUseCase.execute(cpf, password);
			if(novoFilme instanceof Error){
				return response.status(400).json(novoFilme.message);
			}
			return response.status(201).json(novoFilme);
		}catch(error){
			return response.status(400).json('Erro');
		}
	}    
    
}