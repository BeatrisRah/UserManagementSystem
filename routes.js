import { Router } from "express";
import userController from "./src/controllers/usersController.js";

const router = Router()

router.use('/', userController)


export default router;