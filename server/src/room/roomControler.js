import gameController from '../game/gameController.js';
import roomService from './roomService.js';
import { validatePlayer, validateRoomData } from './validator.js';

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

async function create(req, res) {
  const { player, roomData } = req.body;

  let errors = validatePlayer(player);
  errors = errors.concat(validateRoomData(roomData));

  if (errors.length !== 0) {
    return res.status(400).json({ errors });
  }

  const room = roomService.create(player, roomData);

  if (!room) return res.sendStatus(400);

  await gameController.joinRoom(player.socketId, room);
  return res.status(201).json({ id: room.id });
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
