import roomService from './roomService.js';
import { validatePlayer, validateRoomData } from './validator.js';

async function show(req, res) {
  const { id } = req.params;
  const room = await roomService.findRoomById(id);

  if (!room) {
    return res.status(404).send("Room not found");
  }

  return res.json({ id });
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

  return res.status(201).json(room);
}

export default {
  show,
  create
};
