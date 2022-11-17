import gameEvents from './gameEvents.js';
import gameService from './gameService.js';

const start = (socket, roomId) => {
  const room = gameService.start(socket.id, roomId);

  if (room) {
    socket.emit(gameEvents.roomUpdate, room.dto());
  }
};

export default {
  start
};
