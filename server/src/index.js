import { Server } from 'socket.io';
import cfg from '../config.js';

const io = new Server(cfg.PORT, {
  cors: [cfg.CLIENT_URL]
});

io.on('connection', socket => {
  console.log(socket.id);
});
