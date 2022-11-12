import gc from '../config/gameConstraints.js';
import Room from '../models/Room.js';

const rooms = new Map();

const generateRoomId = () => {
  return String(gc.MIN_ROOM_ID + rooms.size);
};

const findAll = () => Array.from(rooms.values());

const findById = (id) => rooms.get(id);

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

const deleteAll = () => rooms.clear();

export default {
  findAll,
  findById,
  create,
  delete: deleteRoom,
  deleteAll,
};
