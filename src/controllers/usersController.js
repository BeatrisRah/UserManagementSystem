import { Router } from "express";

const userController = Router()

userController.get('/', (req, res) => {
    res.render('home')
})


export default userController;