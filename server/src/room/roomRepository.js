import gc from '../config/gameConstraints.js';
import Room from '../models/Room.js';

const rooms = new Map();

const generateRoomId = () => {
  return String(gc.ROOM_MIN_ID + rooms.size);
};

const findAll = () => Array.from(rooms.values());

const findById = (id) => ({ id });

const create = (roomData) => {
  const roomId = generateRoomId();
  const room = new Room({
    ...roomData,
    id: roomId,
  });
  rooms.set(roomId, room);

  return room;
};

const deleteRoom = (roomId) => rooms.delete(roomId);

export default {
  findAll,
  findById,
  create,
  delete: deleteRoom,
};
