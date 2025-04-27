import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
mongoose.connect(process.env.DATABASE_URL)
    .then(() => console.log('Veri tabani ile bağlanti kuruldu⛏'))
    .catch(() => console.log('Veri tabani ile bağlanti kurulamadi🧨'));
const app = express();
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Serverdan Merhaba');
});
app.listen(process.env.PORT, () => {
    console.log(`${process.env.PORT}. port dinlemde💊`);
});
