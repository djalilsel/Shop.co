import express from 'express'
const app = express()
import cors from 'cors'
import productsRouter from './routes/products.js'
import reviewsRouter from './routes/reviews.js'
import usersRouter from './routes/users.js'

app.use(express.json())
app.use(cors({
    origin: "http://localhost:3000"
}))

app.use('/api/products', productsRouter)
app.use('/api/reviews', reviewsRouter)
app.use('/api/users', usersRouter)

app.listen(8800, () => console.log("server listening on port 8800"))