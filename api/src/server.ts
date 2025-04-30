import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import authRouter from './routes/auth.routes.ts'
import gigRouter from './routes/gig.routes.ts'
import reviewRouter from './routes/review.routes.ts'
import errorMiddleware from './middleware/errorHandler.ts'
import cors from 'cors'


dotenv.config();

mongoose.connect(process.env.DATABASE_URL as string)
    .then(() => console.log('Veri tabani ile bağlanti kuruldu⛏'))
    .catch(() => console.log('Veri tabani ile bağlanti kurulamadi🧨'))

const app = express()

app.use(express.json())

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE'],
    credentials: true
}))

app.use('/api/auth', authRouter)
app.use('/api/gigs', gigRouter)
app.use('/api/reviews', reviewRouter)

app.use(errorMiddleware)


app.listen(process.env.PORT, () => {
    console.log(`${process.env.PORT}. port dinlemde💊`)
})