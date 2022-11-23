import roomService from '../room/roomService.js';

const start = (socketId, roomId) => {
  const room = roomService.findRoomById(roomId);

  if (!room || room.owner.socketId !== socketId) return null;

  room.start();
  return room;
};

const chooseWord = (socketId, roomId, word) => {
  const room = roomService.findRoomById(roomId);

  if (!room || room.playerInTurn.socketId !== socketId) return null;

  room.chooseRoundWord(word);
  return room;
};

export default {
  start,
  chooseWord,
};
