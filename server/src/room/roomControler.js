import gameController from '../game/gameController.js';
import roomService from './roomService.js';
import { validatePlayerData, validateRoomData } from './validator.js';

function index(req, res) {
  const rooms = roomService.findAll();
  const roomsDtos = rooms.map(r => r.dto());
  return res.json(roomsDtos);
}

function show(req, res) {
  const { id } = req.params;
  const socketId = req.headers.socketid;

  if (!socketId) {
    return res.sendStatus(401);
  }

  const room = roomService.findRoomById(id);
  if (!room) {
    return res.sendStatus(404);
  }

  if (!room.contains(socketId)) {
    return res.sendStatus(403);
  }

  return res.json(room.dto());
}

function create(playerData, roomData) {
  let errors = validatePlayerData(playerData);
  errors = errors.concat(validateRoomData(roomData));

  if (errors.length !== 0) {
    return { errors };
  }

  const data = roomService.create(playerData, roomData);
  if (!data) {
    errors.push('Sala não pôde ser criada');
    return { errors };
  }
  return {
    room: data.room.dto(),
    player: data.player.dto()
  };
}

async function join(req, res) {
  const socketId = req.headers.socketid;
  const roomId = req.params.id;
  const { password, nick } = req.body;

  if (!socketId) {
    return res.sendStatus(401);
  }

  const room = roomService.findRoomById(roomId);

  if (!room) {
    return res.sendStatus(404);
  }

  if (room.password !== "" && room.password !== password) {
    return res.sendStatus(401);
  }

  roomService.joinRoom(socketId, room, nick);

  await gameController.joinRoom(socketId, room);
  res.sendStatus(201);
}

export default {
  index,
  show,
  create,
  join,
};
