const rooms = new Map();

const findAll = () => Array.from(rooms.values());

const findById = (id) => rooms.get(id);

const save = (room) => rooms.set(room.id, room);

const deleteRoom = (roomId) => rooms.delete(roomId);

const deleteAll = () => rooms.clear();

const size = () => rooms.size;

export default {
  findAll,
  findById,
  save,
  delete: deleteRoom,
  deleteAll,
  size,
};
