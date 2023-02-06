import socket from './socket';

function guessLetter(roomId, letter) {
  socket.emit('guess_letter', roomId, letter);
}

export default guessLetter;
