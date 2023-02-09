import * as morgan from 'morgan' 
import * as server from './routes/route'
import * as express from 'express'

const app=express()

app.use(express.urlencoded({ extended:true }))
app.use(express.json())
app.use(morgan('dev'))

app.use('/', server)

app.listen(8081)