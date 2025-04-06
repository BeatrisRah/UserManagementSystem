import { Router } from "express";

const userController = Router()

userController.get('/', async (req, res) => {
    const response = await fetch('https://dummyjson.com/users')
    const usesrList = await response.json()
    

    res.render('home', {usesrList: usesrList['users']})
})


export default userController;