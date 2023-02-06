import gameEvents from '../game/gameEvents.js';
import { io } from '../server.js';

const activeTimers = new Map();

const add = (room, func, delay) => {
  const prevTimeoutId = activeTimers.get(room.id);
  clearInterval(prevTimeoutId);

  const timeoutId = setTimeout(() => {
    func();
    io.to(room.id).emit(gameEvents.roomUpdate, room.dto());
  }, delay);

  activeTimers.set(room.id, timeoutId);
};

const clear = (roomId) => {
  const timeoutId = activeTimers.get(roomId);

  if (!timeoutId) return;

  clearInterval(timeoutId);
  activeTimers.delete(roomId);
};

export default {
  add,
  clear
};
