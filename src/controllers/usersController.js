import { Router } from "express";
import usersService from "../services/usersService.js";
import { isAuth } from "../middlewares/authMiddleware.js";
import { getErrorMessage } from "../utils/errorMessage.js";
import checkFromData from "../utils/checkFromData.js";

const userController = Router()

userController.get('/', async (req, res) => {
    const reqestPage = parseInt(req.query.page)
    const isAdmin = req.user?.role === 'admin';    
    
    const [usesrList, limit, page] = await usersService.geAll(reqestPage)
    const total = usesrList.total;
    const totalPages = [...Array(Math.ceil(total / limit)).keys()].map(i => i + 1);
    

    res.render('home', {
        usesrList: usesrList['users'], 
        total, 
        currentPage:page, 
        totalPages, 
        isAdmin})
})

userController.get('/user/:userId/edit', isAuth, async (req, res) => {
    const userID = req.params.userId;
    const userData = await usersService.getOne(userID)
    res.render('users/edit', {userData})
})


userController.post('/user/:userId/edit', isAuth, async (req, res) => {
    const userID = req.params.userId;
    const userData = req.body;
    const data = {
        firstName:userData.firstName,
        lastName:userData.lastName,
        email:userData.email,
        company: {
            department:userData.department,
            title:userData.title
        }
    }

    try{
        checkFromData(userData)
        await usersService.editUSer(userID, data)
        res.redirect('/')
    } catch(err){
        const error = getErrorMessage(err)
        res.render('users/edit', {userData, error})
    }

})

export default userController;