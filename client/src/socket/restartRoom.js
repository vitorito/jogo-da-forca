import socket from './socket';

function restartRoom(roomId) {
  socket.emit('restart', roomId);
}

export default restartRoom
