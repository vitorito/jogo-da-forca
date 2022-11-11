class Player {
  constructor(socketId, id, nick) {
    this.socketId = socketId;
    this.id = id;
    this.nick = nick;
  }

  dto() {
    return {
      id: this.id,
      nick: this.nick
    };
  }
}

export default Player;
