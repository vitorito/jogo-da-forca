import { } from '@tanstack/react-query';
import io from 'socket.io-client';
import _api from '../api/_api';

const socket = io(import.meta.env.VITE_API_URL);

socket.on('connect', () => {
  _api.defaults.headers.socketId = socket.id;
});

export default socket;
