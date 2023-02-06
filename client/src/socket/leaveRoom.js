import socket from './socket';

function leaveRoom() {
  socket.emit('leave_room');
}

export default leaveRoom;
