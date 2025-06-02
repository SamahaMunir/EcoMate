// server.js
import express from 'express'
import path from 'path'
import {logger} from './middleware/logger.js'
import { fileURLToPath } from 'url'
import rootRoutes from './routes/root.js'


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT = process.env.PORT || 3001

app.use(logger)

app.use(express.json())

// Serve static files
app.use('/', express.static(path.join(__dirname, 'public')))

// Route handler
app.use('/', rootRoutes)

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

app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`))
