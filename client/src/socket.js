import io from 'socket.io-client';
import cfg from './config/config';
import _api from './api/_api';

const socket = io(cfg.SERVER_URL);

socket.on('connect', () => {
  _api.defaults.headers.socketId = socket.id;
})

export default socket;
