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

    try{
        const {token, user} = await usersService.loginUser(userData)
        res.cookie('auth', token)
        res.setUser({
            username:user.username, 
            role:user.role,
            id:user.id
        })
        res.redirect('/')
    } catch(err){
        console.log(err.message);
        res.end()
        // TODO: ERROR HANDLING
    }

})

export default authController;