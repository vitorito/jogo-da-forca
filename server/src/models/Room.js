import gc from '../config/gameConstraints.js';

class Room {
  constructor({ id, owner, password, themes, speed, totalRounds }) {
    this.id = id;
    this.owner = owner;
    this.password = password;
    this.themes = themes;
    this.speed = speed;
    this.isPrivate = !!password;
    this.totalRounds = totalRounds;
    this.currentRound = 1;
    this.round = {
      state: gc.ROOM_MATCH_STATES.waiting,
      theme: '',
      playerInTurn: '',
    };
    this.players = new Map();
    this.add(owner);
  }

  add(player) {
    this.players.set(player.socketId, player);
  }

  contains(socketId) {
    return this.players.has(socketId);
  }

  remove(socketId) {
    return this.players.delete(socketId);
  }

  getPlayers() {
    return Array.from(this.players.values());
  }

  size() {
    return this.players.size;
  }

  dto() {
    return {
      id: this.id,
      owner: this.owner.id,
      speed: this.speed,
      themes: Array.from(this.themes),
      currentRound: this.currentRound,
      totalRounds: this.totalRounds,
      isPrivate: this.isPrivate,
      players: this.getPlayers().map(p => p.dto()),
      round: { ...this.round }
    };
  }

}


export default Room;
