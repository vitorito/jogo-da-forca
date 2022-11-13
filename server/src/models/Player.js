class Player {
  constructor(socketId, id, nick) {
    this.socketId = socketId;
    this.id = id;
    this.nick = nick;
    this.points = 0;
    this.isWatching = true;
    this.round = {
      word: '',
      errors: 0,
      correctLetters: [],
      wrongLetters: [],
    };
  }

  dto() {
    return {
      id: this.id,
      nick: this.nick,
      points: this.points,
      isWatching: this.isWatching,
      round: {
        ...this.round,
        correctLetters: Array.from(this.round.correctLetters),
        wrongLetters: Array.from(this.round.wrongLetters),
      }
    };
  }
}

export default Player;
