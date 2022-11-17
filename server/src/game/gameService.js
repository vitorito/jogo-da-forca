import roomService from '../room/roomService.js';

const start = (socketId, roomId) => {
  const room = roomService.findRoomById(roomId);

  if (!room || room.owner.socketId !== socketId) return null;

  room.start();
  return room;
};

export default {
  start
};
