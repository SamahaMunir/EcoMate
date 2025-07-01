// server.js
import dotenv from 'dotenv'
import express from 'express'
import path from 'path'
import {logger,logEvents} from './middleware/logger.js'
import {errorHandler} from './middleware/errorHandler.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import { connectDB } from './config/dbConn.js'
import mongoose from 'mongoose'
import { corsOptions } from './config/corsOptions.js'
import { fileURLToPath } from 'url'
import rootRoutes from './routes/root.js'
import userRoutes from './routes/userRoutes.js'
import activityRoutes from './routes/activityRoutes.js'


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT = process.env.PORT || 3001

dotenv.config()

console.log(process.env.NODE_ENV)

connectDB()

app.use(logger)

app.use(cors(corsOptions))

app.use(express.json())

app.use(cookieParser())

// Serve static files
app.use('/', express.static(path.join(__dirname, 'public')))

// Route handler
app.use('/', rootRoutes)

app.use('/users', userRoutes)

app.use('/activities', activityRoutes)

app.get('/error', (req, res) => {
  // This will simulate an error and trigger the errorHandler
  throw new Error('found error for testing');
});


app.use((req, res) => {
  res.status(404)
  if (req.accepts('html')) {
    res.sendFile(path.join(__dirname, 'views', '404.html'))
  } else if (req.accepts('json')) {
    res.json({ message: '404 not found' })
  } else {
    res.type('txt').send('404 Not Found')
  }
});

app.use(errorHandler)

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB')
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
})

mongoose.connection.on('error', err => {
    console.log(err)
    logEvents(`${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`, 'mongoErrLog.log')
})
