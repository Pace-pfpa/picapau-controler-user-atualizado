import { Router } from 'express';
import { createuseController } from '../modules/CreateUse';
import { authController } from '../modules/Authentication';
import { authMiddlwares } from '../middlweares/auth';
import { createProcessController } from '../modules/CreateProcess';
import { findAllController } from '../modules/FindAllProcess';


const router = Router();

router.post("/create/user", async (req, res) => {
	return await createuseController.handle(req, res);
})

router.post("/login",async (req, res) => {
	console.log(req.headers)
	return await authController.handle(req, res);
})

router.post("/saveProcess", authMiddlwares,async (req, res) => {
	console.log(req.userId)
	return await createProcessController.handle(req, res);
})


router.post("/findAll", authMiddlwares,async (req, res) => {
	console.log("chegou")
	return await findAllController.handle(req, res);
})


export { router };