import gc from '../config/gameConstraints.js';
import Player from '../models/Player.js';
import Room from '../models/Room.js';
import roomRepo from './roomRepository.js';

const generateRoomId = () => {
  return String(gc.MIN_ROOM_ID + roomRepo.size());
};

const generatePlayerId = (roomId, roomSize) => {
  return roomId + (roomSize + 1).toString().padStart(2, '0');
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

const findAll = () => roomRepo.findAll();

const create = (owner, roomData) => {
  disconnectPlayer(owner.socketId);

  const roomId = generateRoomId();
  const playerId = generatePlayerId(roomId, 0);
  const player = new Player(owner.socketId, playerId, owner.nick);
  const room = new Room({
    ...roomData,
    id: roomId,
    owner: player,
  });;

  roomRepo.save(room);
  return room;
};

const joinRoom = (socketId, room, playerNick) => {
  disconnectPlayer(socketId);

  const playerId = generatePlayerId(room.id, room.size());
  const player = new Player(socketId, playerId, playerNick);
  room.add(player);
};

export default {
  findRoomById,
  findAll,
  create,
  joinRoom,
};
