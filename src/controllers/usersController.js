import { Router } from "express";
import usersService from "../services/usersService.js";

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


export default userController;