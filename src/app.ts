import 'reflect-metadata'
import express, { json } from 'express'
import { createConnection } from 'typeorm'
import cors from 'cors'

createConnection()
const app = express()

app.use(cors())
app.use(json())

export default app
