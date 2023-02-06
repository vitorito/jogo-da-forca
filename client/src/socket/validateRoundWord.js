import socket from './socket';

function validateRoundWord(roomId) {
  socket.emit('validate_round_word', roomId);
}

export default validateRoundWord;
