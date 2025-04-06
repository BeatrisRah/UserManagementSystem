import { Router } from "express";

const userController = Router()

userController.get('/', async (req, res) => {

    const limit = 10;
    const page = parseInt(req.query.page) || 1;
    const skip = (page - 1) * limit;
    
    const response = await fetch(`https://dummyjson.com/users?limit=${limit}&skip=${skip}`)
    const usesrList = await response.json()
    const total = usesrList.total;
    const totalPages =  [...Array(Math.ceil(total / limit)).keys()]
    

    res.render('home', {usesrList: usesrList['users'], total, currenstPage:page, totalPages})
})


export default userController;