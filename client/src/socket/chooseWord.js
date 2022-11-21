import socket from './socket';

function chooseWord(word) {
  console.log(word);
  socket.emit('choose_word', word);
}

export default chooseWord;
