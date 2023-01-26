import * as dotenv from 'dotenv';
dotenv.config();

import cors from 'cors';
import Express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import gameController from './game/gameController.js';
import router from './routes/router.js';

const PORT = process.env.PORT;
const CLIENT_URL = process.env.CLIENT_URL;

export const app = Express();

const httpServer = createServer(app);

export const io = new Server(httpServer, {
  cors: {
    origin: [CLIENT_URL],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE"
  }
});

app.use(cors());
app.use(Express.json());

app.use(router);

io.on('connection', socket => {
  gameController.setupGameEvents(socket);
});

httpServer.listen(PORT, () => {
  console.log(`Server running at port: ${PORT}`);
});
