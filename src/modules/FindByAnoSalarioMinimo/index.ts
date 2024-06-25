import { FindByAnoSMController } from './FindByAnoSMController';
import { FindByAnoSMUseCase } from './FindByAnoSMUseCase';
import { PostgreSMRepository } from '../../Repository/Implementations/PostgreeSMRepository';

export const postgreSMRepository = new PostgreSMRepository();
export const findByAnoSMUseCase = new FindByAnoSMUseCase(postgreSMRepository);
export const findByAnoSMController = new FindByAnoSMController(findByAnoSMUseCase);