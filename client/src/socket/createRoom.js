import socket from './socket';

function createRoom(data, setRoom) {
  socket.emit('create_room', data, setRoom);
}

export default createRoom;
