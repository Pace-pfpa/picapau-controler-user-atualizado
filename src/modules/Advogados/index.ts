import { AdvogadosController } from './AdvogadosController';
import { AdvogadosUseCase } from './AdvogadosUseCase';
import { PostgreAdvogadoRepository } from '../../Repository/Implementations/PostgreAdvogadoRepository';

export const advogadoRepository = new PostgreAdvogadoRepository();
export const advogadosUseCase = new AdvogadosUseCase(advogadoRepository);
export const advogadosController = new AdvogadosController(advogadosUseCase);