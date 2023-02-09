import * as morgan from 'morgan' 
import { server } from './routes/route'
import * as express from 'express'

const app=express.default()

app.use(express.urlencoded({ extended:true }))
app.use(express.json())
app.use(morgan.default('dev'))

app.use('/', server)

app.listen(8081)