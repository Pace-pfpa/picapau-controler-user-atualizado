import { SalarioMinimoController } from './SalarioMinimoController';
import { SalarioMinimoUseCase } from './SalarioMinimoUseCase';
import { PostgreSMRepository } from '../../Repository/Implementations/PostgreeSMRepository';

export const postgreSMRepository = new PostgreSMRepository();
export const salarioMinimoUseCase = new SalarioMinimoUseCase(postgreSMRepository);
export const salarioMinimoController = new SalarioMinimoController(salarioMinimoUseCase);