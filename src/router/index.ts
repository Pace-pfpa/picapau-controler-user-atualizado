import { Router } from 'express';
import { createuseController } from '../modules/CreateUse';
import { authController } from '../modules/Authentication';
import { authMiddlwares } from '../middlweares/auth';
import { createProcessController } from '../modules/CreateProcess';
import { findAllController } from '../modules/FindAllProcess';
import { deleteProcessAllController, deleteProcessIdController } from '../modules/DeleteProcess';
import { updatePasswordController } from '../modules/UpdatePassword';
import { salarioMinimoController } from '../modules/CreateSalarioMinimo';
import { findByAnoSMController } from '../modules/FindByAnoSalarioMinimo';
import { createAdvogadoController } from '../modules/CreateAdvogado';
import { buscaAdvogadoController } from '../modules/BuscaAdvogado';
import { advogadosController } from '../modules/Advogados';


const router = Router();

router.post('/create/user', async (req, res) => {
	return await createuseController.handle(req, res);
});

router.post('/login',async (req, res) => {
	console.log(req.headers);
	return await authController.handle(req, res);
});

router.post('/saveProcess', authMiddlwares,async (req, res) => {
	console.log(req.userId);
	return await createProcessController.handle(req, res);
});


router.post('/findAll', authMiddlwares,async (req, res) => {
	console.log('chegou');
	return await findAllController.handle(req, res);
});

router.delete('/deleteAll', authMiddlwares, async (req, res) => {
	return await deleteProcessAllController.handle(req, res);
});

router.delete('/deleteById', authMiddlwares, async (req, res) => {
	return await deleteProcessIdController.handle(req, res);
});

router.post('/updatePassword', async (req, res) => {
	console.log(req.body);
	return await updatePasswordController.handle(req, res);
});

router.post('/createSalarioMinimo', async (req, res) => { 
	return await salarioMinimoController.handle(req, res);
});

router.get('/findSalarioMinimo/:ano', async (req, res) => {
	return await findByAnoSMController.handle(req, res);
});

router.get('/advogados', async (req, res) => {
	return await advogadosController.handle(req, res);
});

router.delete('/advogados/:id', async (req, res) => {
	return await advogadosController.handleDelete(req, res);
});

router.post('/create/advogado', async (req, res) => {
	console.log('opaa');
	return await createAdvogadoController.handle(req, res);
});

router.get('/search/advogado', async (req, res) => {
	console.log('milan');
	return await buscaAdvogadoController.handle(req, res);
});


export { router };