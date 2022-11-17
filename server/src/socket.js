import gameController from './game/gameController.js';
import gameEvents from './game/gameEvents.js';

export const setupSocketGameEvents = (socket) => {
  socket.on(gameEvents.start, (roomId) => {
    gameController.start(socket, roomId);
  });

};
