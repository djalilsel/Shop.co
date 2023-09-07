import express from 'express'
const app = express()
import cors from 'cors'
import productsRouter from './routes/products.js'
import reviewsRouter from './routes/reviews.js'
import usersRouter from './routes/users.js'
import authRouter from './routes/auth.js'
import cookieParser from 'cookie-parser'

app.use(express.json())
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}))
app.use(cookieParser())

app.use('/api/products', productsRouter)
app.use('/api/reviews', reviewsRouter)
app.use('/api/users', usersRouter)
app.use('/api/auth', authRouter)

app.listen(8800, () => console.log("server listening on port 8800"))