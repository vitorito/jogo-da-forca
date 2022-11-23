import gameEvents from './gameEvents.js';
import gameService from './gameService.js';

function gameController(socket) {
  socket.on(gameEvents.start, start);

  function start(roomId) {
    const room = gameService.start(socket.id, roomId);
    if (room) {
      socket.emit(gameEvents.roomUpdate, room.dto());
    }
  }

}

export default gameController;
