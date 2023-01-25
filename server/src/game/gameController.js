import gc from '../config/gameConstraints.js';
import roomControler from '../room/roomControler.js';
import roomService from '../room/roomService.js';
import { io } from '../server.js';
import gameEvents from './gameEvents.js';
import gameService from './gameService.js';


function setupGameEvents(socket) {
  socket.on(gameEvents.start, start);
  socket.on(gameEvents.restart, restart);
  socket.on(gameEvents.chooseWord, chooseWord);
  socket.on(gameEvents.createRoom, createRoom);
  socket.on(gameEvents.joinRoom, joinRoom);
  socket.on(gameEvents.guessLetter, guessLetter);
  socket.on(gameEvents.leaveRoom, leaveRoom);
  socket.on(gameEvents.disconnect, leaveRoom);
  socket.on(gameEvents.validateRoundWord, validateRoundWord);

  function start(roomId) {
    const room = gameService.start(socket.id, roomId);
    if (room) {
      io.to(room.id).emit(gameEvents.roomUpdate, room.dto());
    }
  }

  function restart(roomId) {
    const room = gameService.restart(socket.id, roomId);
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

  function leaveRoom() {
    const room = roomService.disconnectPlayer(socket.id);

    if (room) {
      socket.to(room.id).emit(gameEvents.roomUpdate, room.dto());
    }
  }

  function validateRoundWord(roomId) {
    const room = gameService.validateRoundWord(socket.id, roomId);

    if (!room) return;

    socket.emit(gameEvents.roomUpdate, room.dto());
  }

  function guessLetter(roomId, letter) {
    const room = gameService.guessLetter(socket.id, roomId, letter);

    if (!room) return;

    if (room.round.state === gc.ROOM_MATCH_STATES.running) {
      const sockets = room.getPlayers()
        .filter(p => p.isWatching)
        .map(p => p.socketId);
      io.to([socket.id, ...sockets]).emit(gameEvents.roomUpdate, room.dto());
      return;
    }

    io.to(room.id).emit(gameEvents.roomUpdate, room.dto());
  }
}


export default {
  setupGameEvents,
};
