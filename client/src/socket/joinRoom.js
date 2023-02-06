import socket from './socket';

function joinRoom(data, cb) {
  socket.emit('join_room', data, cb);
}

export default joinRoom;
