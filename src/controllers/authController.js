import { Router } from "express";
import usersService from "../services/usersService.js";
import { isAuth } from "../middlewares/authMiddleware.js";
import { getErrorMessage } from "../utils/errorMessage.js";

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
        // const error = getErrorMessage(err)
        res.render('login', { userData, error:'Something went wrong!'})

    }

})

authController.get('/logout', isAuth, (req, res) => {
    res.clearCookie('auth')
    res.resetUser()
    res.redirect('/')
})

export default authController;