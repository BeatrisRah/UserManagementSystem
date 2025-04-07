import { Router } from "express";
import userController from "./src/controllers/usersController.js";
import authController from "./src/controllers/authController.js";

const router = Router()

router.use('/', userController)
router.use('/auth', authController)



export default router;