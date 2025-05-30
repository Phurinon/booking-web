import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import logger from './logger.js'
import cors from 'cors'

// Import routes
import userRoutes from './routes/user/index.js'
import handleError from './middleware/error.js'

const app = express()
const port = process.env.PORT


// Middleware
app.use(express.json())
app.use(cors())

// Routing
app.use('/api/user', userRoutes)

// Error handling middleware
app.use(handleError)


app.listen(port, () => {
    logger.info(`Server is running at http://localhost:${port}`)
})