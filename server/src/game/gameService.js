import roomService from '../room/roomService.js';

const start = (socketId, roomId) => {
  const room = roomService.findRoomById(roomId);

  if (!room || room.owner.socketId !== socketId) return null;

  const started = room.nextRound(true);

  return started && room;
};

const restart = (socketId, roomId) => {
  const room = roomService.findRoomById(roomId);

  if (!room || room.owner.socketId !== socketId) return null;

  room.restart();
  return room;
};

const chooseWord = (socketId, roomId, word) => {
  const room = roomService.findRoomById(roomId);

  if (!room || room.playerInTurn.socketId !== socketId) return null;

  const hasChosen = room.chooseRoundWord(socketId, word);

  if (!hasChosen) return null;

  return room;
};

const guessLetter = (socketId, roomId, letter) => {
  const room = roomService.findRoomById(roomId);

  if (!room) return null;

  const guessed = room.guessLetter(socketId, letter);

  if (!guessed) return null;

  return room;
};

function validateRoundWord(socketId, roomId) {
  const room = roomService.findRoomById(roomId);

  if (!room || room.playerInTurn.socketId === socketId) return null;

  const player = room.getPlayer(socketId);

  if (!player) return null;

  player.validateRoundWord();
  return room;
}

export default {
  start,
  restart,
  chooseWord,
  guessLetter,
  validateRoundWord
};
