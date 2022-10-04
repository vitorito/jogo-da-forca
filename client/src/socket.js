import io from 'socket.io-client';
import cfg from '../config';

const socket = io(cfg.SERVER_URL);

export default socket;
