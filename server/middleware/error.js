import logger from "../logger.js"

const handleError = (err, req, res, next) => {
    logger.error(err.message)
    res.status(err.statusCode || 500).json({ message: err.message || 'Internal Server Error' })
}

export default handleError