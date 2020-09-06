import 'reflect-metadata'
import express, { json } from 'express'
import { createConnection } from 'typeorm'
import cors from 'cors'
import routes from './routes'
import { errors } from 'celebrate'

createConnection()
const app = express()

app.use(cors())
app.use(json())
app.use('/api/v1', routes)
app.use(errors())

export default app
