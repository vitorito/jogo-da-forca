import roomService from './roomService.js';
import { validatePlayer, validateRoomData } from './validator.js';

async function show(req, res) {
  const { id } = req.params;
  const room = roomService.findRoomById(id);

  if (!room) {
    return res.status(404).send({
      errors: ["Room not found"]
    });
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

  const roomId = roomService.create(player, roomData);

  if (!roomId) return res.sendStatus(400);

  return res.status(201).json({ id: roomId });
}

export default {
  show,
  create
};
