import roomService from './roomService.js';
import { validatePlayer, validateRoomData } from './validator.js';

function index(req, res) {
  const rooms = roomService.findAll();
  return res.json(rooms);
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

function create(req, res) {
  const { player, roomData } = req.body;

  let errors = validatePlayer(player);
  errors = errors.concat(validateRoomData(roomData));

  if (errors.length !== 0) {
    return res.status(400).json({ errors });
  }

  const roomId = roomService.create(player, roomData);

  if (!roomId) return res.sendStatus(400);

  return res.status(201).json({ id: roomId });
}

export default {
  index,
  show,
  create
};
