import Player from '../models/Player.js';
import roomRepo from './roomRepository.js';

const generatePlayerId = (room) => {
  return room.id + (room.size() + 1).toString().padStart(2, '0');
};

const deleteRoom = (roomId) => roomRepo.delete(roomId);

const disconnectPlayer = (socketId) => {
  const rooms = roomRepo.findAll();
  const room = rooms.find(room => room.contains(socketId));

  if (!room) return;

  if (room.size === 1) {
    deleteRoom(room.id);
  }

  room.remove(socketId);
};

const findRoomById = (id) => roomRepo.findById(id);

const create = (owner, roomData) => {
  disconnectPlayer(owner.socketId);

  const room = roomRepo.create(roomData);
  const playerId = generatePlayerId(room);
  const player = new Player(owner.socketId, playerId, owner.nick);
  room.add(player);

  return room.id;
};

export default {
  findRoomById,
  create,
};
