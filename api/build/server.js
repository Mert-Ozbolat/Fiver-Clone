import express from 'express';
const app = express();
const port = 3000;
app.get('/', (req, res) => {
    res.send('Serverdan Merhaba');
});
app.listen(port, () => {
    console.log(`${port}. port dinlemde💊`);
});
