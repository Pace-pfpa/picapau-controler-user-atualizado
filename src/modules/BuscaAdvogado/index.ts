import { BuscaAdvogadoController } from './BuscaAdvogadoController';
import { BuscaAdvogadoUseCase } from './BuscaAdvogadoUseCase';
import { PostgreAdvogadoRepository } from '../../Repository/Implementations/PostgreAdvogadoRepository';

export const postgreAdvogadoRepository = new PostgreAdvogadoRepository();
export const buscaAdvogadoUseCase = new BuscaAdvogadoUseCase(postgreAdvogadoRepository);
export const buscaAdvogadoController = new BuscaAdvogadoController(buscaAdvogadoUseCase);