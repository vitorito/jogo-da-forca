import cors from 'cors';
import express from 'express';
import roomRouter from './routes/router.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use(roomRouter);

app.get('/', (req, res) => res.send("hello world"));

export default app;
