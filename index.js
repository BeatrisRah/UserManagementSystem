import express from 'express'
import handlebars from 'express-handlebars'
import 'dotenv/config'
import router from './routes.js';
import cookieParser from 'cookie-parser';
import expressSession from 'express-session'
import { setUser } from './src/middlewares/authMiddleware.js';
import { errorMiddleware } from './src/middlewares/errorMiddleware.js';


const app =  express()
const port = process.env.PORT || 3000;

app.engine('hbs', handlebars.engine({
    extname:'hbs',
    helpers:{
        equals: (a, b) =>  a === b,
        add: (a, b, limit) => a + b > limit ? null : a + b,
        subtract: (a, b) => a - b > 0 ? a - b : 1,
    }
}))
app.set('view engine', 'hbs')
app.set('views', './src/views')

app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(expressSession({
    secret: 'iLikerabbits',
    resave: false,
    saveUninitialized: false,
    cookie: { 
        secure: false,
        httpOnly:true}
}))

app.use(setUser)
app.use(errorMiddleware)
app.use(router)


app.listen(port, () => console.log(`Server listening to http://localhost:${port}`))
