import { Router } from "express";

const authController = Router()

authController.get('/register', (req, res) => {
    res.render('register')
})

export default authController;