import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRouter from './routes/auth.routes';
import gigRouter from './routes/gig.routes';
import reviewRouter from './routes/review.routes';
dotenv.config();
mongoose.connect(process.env.DATABASE_URL)
    .then(() => console.log('Veri tabani ile bağlanti kuruldu⛏'))
    .catch(() => console.log('Veri tabani ile bağlanti kurulamadi🧨'));
const app = express();
app.use(express.json());
app.use('/api/auth', authRouter);
app.use('/api/gigs', gigRouter);
app.use('/api/reviews', reviewRouter);
app.listen(process.env.PORT, () => {
    console.log(`${process.env.PORT}. port dinlemde💊`);
});
