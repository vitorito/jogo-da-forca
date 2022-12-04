import cors from 'cors';
import Express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import cfg from './config/config.js';
import gameController from './game/gameController.js';
import router from './routes/router.js';

export const app = Express();

const httpServer = createServer(app);

export const io = new Server(httpServer, {
  cors: {
    origin: [cfg.CLIENT_URL],
  }
});

app.use(cors());
app.use(Express.json());

app.use(router);

io.on('connection', socket => {
  console.log(socket.id);
  gameController.setupGameEvents(socket);
});

httpServer.listen(cfg.PORT, () => {
  console.log(`Server running at port: ${cfg.PORT}`);
});

