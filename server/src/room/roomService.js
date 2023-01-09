import lodash from 'lodash';
import gc from '../config/gameConstraints.js';
import Player from '../models/Player.js';
import Room from '../models/Room.js';
import roomRepo from './roomRepository.js';

const isValidPassword = (roomPassword, passwordAttemp) => {
  return roomPassword === "" || roomPassword === passwordAttemp;
};

const generateRoomId = () => {
  const id = String(lodash.random(gc.MIN_ROOM_ID, gc.MAX_ROOM_ID));
  const notInUseId = !roomRepo.contains(id);
  return notInUseId ? id : generateRoomId();
};

const generatePlayerId = (roomId, roomTotalPlayers) => {
  return roomId + (roomTotalPlayers + 1).toString().padStart(2, '0');
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
  return room;
};

const findRoomById = (id) => roomRepo.findById(id);

const findAll = () => roomRepo.findAll();

const create = (owner, roomData) => {
  disconnectPlayer(owner.socketId);

  const roomId = generateRoomId();
  const playerId = generatePlayerId(roomId, 1);
  const player = new Player(owner.socketId, playerId, owner.nick);
  const room = new Room({
    ...roomData,
    id: roomId,
    owner: player,
  });;

  roomRepo.save(room);
  return { room, player };
};

const joinRoom = (socketId, { roomId, password, nick }) => {
  const room = findRoomById(roomId);

  if (!room || !isValidPassword(room.password, password)) return null;

  disconnectPlayer(socketId);

  const playerId = generatePlayerId(room.id, room.totalPlayers + 1);
  const player = new Player(socketId, playerId, nick);
  room.add(player);

  return { player, room };
};

export default {
  findRoomById,
  findAll,
  create,
  joinRoom,
  disconnectPlayer
};
