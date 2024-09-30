import { CreateAdvogadoController } from './CreateAdvogadoController';
import { CreateAdvogadoUseCase } from './CreateAdvogadoUseCase';
import { PostgreAdvogadoRepository } from '../../Repository/Implementations/PostgreAdvogadoRepository';

export const postgreAdvogadoRepository = new PostgreAdvogadoRepository();
export const createAdvogadoUseCase = new CreateAdvogadoUseCase(postgreAdvogadoRepository);
export const createAdvogadoController = new CreateAdvogadoController(createAdvogadoUseCase);