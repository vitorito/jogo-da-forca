import { createServer } from 'http';
import { Server } from 'socket.io';
import app from './app.js';
import cfg from './config/config.js';
import gameController from './game/gameController.js';

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: [cfg.CLIENT_URL],
  }
});

io.on('connection', socket => {
  console.log(socket.id);
  gameController(socket);
});

httpServer.listen(cfg.PORT, () => {
  console.log(`Server running at port: ${cfg.PORT}`);
});
