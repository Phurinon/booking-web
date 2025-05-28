import express from 'express'
import morgan from 'morgan'
import winston from 'winston'
import dotenv from 'dotenv'
dotenv.config()
import logger from './logger.js'

const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
    res.json('This is folk/back-dev')
})



app.listen(port, () => {
    logger.info(`Server is running on port ${port}`)
})