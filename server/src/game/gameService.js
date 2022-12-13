import roomService from '../room/roomService.js';

const start = (socketId, roomId) => {
  const room = roomService.findRoomById(roomId);

  if (!room || room.owner.socketId !== socketId) return null;

  room.nextRound();
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

  const guessed  = room.guessLetter(socketId, letter);

  if (!guessed) return null;

  return room;
};

export default {
  start,
  chooseWord,
  guessLetter
};
