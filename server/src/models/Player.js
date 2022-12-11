import gc from '../config/gameConstraints.js';

class Player {
  constructor(socketId, id, nick) {
    this.socketId = socketId;
    this.id = id;
    this.nick = nick;
    this.points = 0;
    this.isWatching = true;
    this.round = {
      word: '',
      correctLetters: [],
      wrongLetters: [],
    };
  }

  guessLetter(roundWord, letter) {
    if (this.getErrorsCount() >= gc.MAX_PLAYER_ROUND_ERRORS ||
      !this.round.word.includes(gc.HIDDEN_LETTER)) return false;

    const splitedWord = this.round.word.split('');

    let includes = false;

    for (const i in roundWord) {
      if (roundWord[i] === letter) {
        splitedWord.splice(i, 1, roundWord[i]);
        includes = true;
      }
    }

    if (includes) {
      this.round.word = splitedWord.join('');
      this.round.correctLetters.push(letter);
    } else {
      this.round.wrongLetters.push(letter);
    }

    return true;
  }

  getErrorsCount() {
    return this.round.wrongLetters.length;
  }

  dto() {
    return {
      id: this.id,
      nick: this.nick,
      points: this.points,
      isWatching: this.isWatching,
      round: {
        ...this.round,
        errors: this.getErrorsCount(),
        correctLetters: Array.from(this.round.correctLetters),
        wrongLetters: Array.from(this.round.wrongLetters),
      }
    };
  }
}

export default Player;
