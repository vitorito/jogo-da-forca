import { io } from '../server.js';
import gameEvents from './gameEvents.js';
import gameService from './gameService.js';


function setupGameEvents(socket) {
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
      socket.emit(gameEvents.roomUpdate, room.dto());
    }
  }
}

async function joinRoom(socketId, room) {
  const socket = io.sockets.sockets.get(socketId);
  await socket.join(room.id);
  socket.to(room.id).emit(gameEvents.roomUpdate, room.dto());
}

export default {
  setupGameEvents,
  joinRoom,
};
