import express from 'express'
import handlebars from 'express-handlebars'
import 'dotenv/config'
import router from './routes.js';


const app =  express()
const port = process.env.PORT || 3000;

app.engine('hbs', handlebars.engine({
    extname:'hbs',
    helpers:{
        equals: (a, b) => a === b,
        add: (a, b) => a + b,
    }
}))
app.set('view engine', 'hbs')
app.set('views', './src/views')

app.use(router)


app.listen(port, () => console.log(`Server listening to http://localhost:${port}`))
