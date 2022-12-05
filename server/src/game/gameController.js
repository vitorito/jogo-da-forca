import roomControler from '../room/roomControler.js';
import { io } from '../server.js';
import gameEvents from './gameEvents.js';
import gameService from './gameService.js';


function setupGameEvents(socket) {
  socket.on(gameEvents.start, start);
  socket.on(gameEvents.chooseWord, chooseWord);
  socket.on(gameEvents.createRoom, createRoom);
  socket.on(gameEvents.joinRoom, joinRoom);


  function start(roomId) {
    const room = gameService.start(socket.id, roomId);
    if (room) {
      io.to(room.id).emit(gameEvents.roomUpdate, room.dto());
    }
  }

  function chooseWord(roomId, word) {
    const room = gameService.chooseWord(socket.id, roomId, word);
    if (room) {
      io.to(roomId).emit(gameEvents.roomUpdate, room.dto());
    }
  }

  function createRoom(data, cb) {
    const res = roomControler.create(data.playerData, data.roomData);

    if (!res.error) {
      socket.join(res.room.id);
    }
    cb(res);
  }

  function joinRoom(data, cb) {
    const res = roomControler.join(socket.id, data);

    if (!res.error) {
      const { room } = res;
      socket.join(room.id);
      socket.to(room.id).emit(gameEvents.roomUpdate, room);
    }

    cb(res);
  }
}


export default {
  setupGameEvents,
};
