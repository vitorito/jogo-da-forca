import { } from '@tanstack/react-query';
import io from 'socket.io-client';
import _api from '../api/_api';
import cfg from '../config/config';

const socket = io(cfg.SERVER_URL);

socket.on('connect', () => {
  _api.defaults.headers.socketId = socket.id;
});

export default socket;
