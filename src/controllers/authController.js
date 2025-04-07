import { Router } from "express";
import usersService from "../services/usersService.js";

const authController = Router()

authController.get('/register', (req, res) => {
    res.render('register')
})

authController.get('/login', (req, res) => {
    res.render('login')
})


authController.post('/login', async (req, res) => {
    const userData = req.body;
    console.log(userData);
    

    try{
        await usersService.loginUser(userData)
        

    } catch(err){
        console.log(err.message);
        
    }

    res.end()
})

export default authController;