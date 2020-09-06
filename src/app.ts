import 'reflect-metadata'
import express, { json } from 'express'
import { createConnection } from 'typeorm'
import cors from 'cors'
import routes from './routes'

createConnection()
const app = express()

app.use(cors())
app.use(json())
app.use('/api/v1', routes)

export default app
