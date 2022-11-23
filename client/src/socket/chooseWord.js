import socket from './socket';

function chooseWord(roomId, word) {
  socket.emit('choose_word', roomId, word);
}

export default chooseWord;
