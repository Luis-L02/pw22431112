import express from 'express';

const app = express();
const PORT = 3001;

app.use(express.json());

app.get('/', (_req, res) => {
    let fecha = new Date().toLocaleDateString();
    res.send(`${fecha}`);
});

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT} http://localhost:3001/`);
});