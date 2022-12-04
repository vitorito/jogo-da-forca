import roomControler from '../room/roomControler.js';
import { io } from '../server.js';
import gameEvents from './gameEvents.js';
import gameService from './gameService.js';


function setupGameEvents(socket) {
  socket.on(gameEvents.start, start);
  socket.on(gameEvents.chooseWord, chooseWord);
  socket.on(gameEvents.createRoom, createRoom);

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

  function createRoom(data, cb) {
    console.log({
      data,
      cb
    });
    const res = roomControler.createRoom(data.playerData, data.roomData);
    cb(res);
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
