import gameEvents from './gameEvents.js';
import gameService from './gameService.js';

function gameController(socket) {
  socket.on(gameEvents.start, start);
  socket.on(gameEvents.chooseWord, chooseWord);

  function start(roomId) {
    const room = gameService.start(socket.id, roomId);
    if (room) {
      socket.emit(gameEvents.roomUpdate, room.dto());
    }
  }

  function chooseWord(roomId, word) {
    const room = gameService.chooseWord(socket.id, roomId, word);
    if (room) {
      console.log('choosed ' + word);
      socket.emit(gameEvents.roomUpdate, room.dto());
    }
  }

}

export default gameController;
