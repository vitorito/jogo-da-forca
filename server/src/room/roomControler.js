import roomService from './roomService.js';
import { validatePlayerData, validateRoomData } from './validator.js';

function index(req, res) {
  const rooms = roomService.findAll();
  const roomsDtos = rooms.map(room => {
    const dto = room.dto();
    return {
      ...dto,
      players: dto.players.length,
    };
  });
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
  const isValidData = validatePlayerData(playerData) && validateRoomData(roomData);

  if (!isValidData) {
    return { error: true };
  }

  const data = roomService.create(playerData, roomData);
  if (!data) {
    return { error: true };
  }

  return {
    room: data.room.dto(),
    player: data.player.dto()
  };
}

function join(socketId, joiningData) {
  const data = roomService.joinRoom(socketId, joiningData);

  if (!data) return { errors: true };

  return {
    room: data.room.dto(),
    player: data.player.dto(),
  };
}

export default {
  index,
  show,
  create,
  join,
};
