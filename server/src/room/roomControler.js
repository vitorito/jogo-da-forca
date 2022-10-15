import roomService from './roomService.js';

async function show(req, res) {
  const { id } = req.params;
  const room = await roomService.findRoomById(id);

  if (!room) {
    return res.status(404).send("Room not found");
  }

  return res.json({ id });
}

export default {
  show
}
