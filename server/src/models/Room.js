import gc from '../config/gameConstraints.js';

class Room {
  constructor({ id, password, themes, speed, totalRounds }) {
    this.id = id;
    this.password = password;
    this.themes = themes;
    this.speed = speed;
    this.players = new Map();
    this.isPrivate = !!password;
    this.round = {
      state: gc.ROOM_MATCH_STATES.waiting,
      current: 1,
      totalRounds: totalRounds,
    };
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
    return Array.from(this.players.values()).map(p => p.dto());
  }

  size() {
    return this.players.size;
  }

  dto() {
    return {
      id: this.id,
      speed: this.speed,
      themes: this.themes,
      isPrivate: this.isPrivate,
      players: this.getPlayers(),
      round: { ...this.round }
    };
  }

}


export default Room;
