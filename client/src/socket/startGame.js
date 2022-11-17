import socket from './socket';

function startGame(roomId) {
  socket.emit('start', roomId);
}

export default startGame;
