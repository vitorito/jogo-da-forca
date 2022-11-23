import lodash from 'lodash';
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
    this.playerInTurn = {
      id: '',
      nick: ''
    };
    this.round = {
      state: gc.ROOM_MATCH_STATES.waiting,
      theme: '',
    };
    this.alreadyPlayed = {
      players: [],
      themes: []
    };
    this.players = new Map();
    this.add(owner);
  }

  start() {
    this.round.state = gc.ROOM_MATCH_STATES.running;
    this.choosePlayerInTurn();
    this.chooseRoundTheme();
  }

  choosePlayerInTurn() {
    const players = Array.from(this.players.values());
    const notPlayed = players.filter((p) => !this.alreadyPlayed.players.includes(p.id));

    let chosenPlayer;

    if (notPlayed.length) {
      chosenPlayer = lodash.sample(notPlayed);
    } else {
      this.alreadyPlayed.players = [];
      chosenPlayer = lodash.sample(players);
    }
    this.playerInTurn = chosenPlayer;
    this.alreadyPlayed.players.push(chosenPlayer);
    chosenPlayer.isWatching = false;
  }

  chooseRoundTheme() {
    const unplayedThemes = this.themes.filter(t => !this.alreadyPlayed.themes.includes(t));

    let chosenTheme;
    if (unplayedThemes.length) {
      chosenTheme = lodash.sample(unplayedThemes);
    } else {
      this.alreadyPlayed.themes = [];
      chosenTheme = lodash.sample(this.themes);
    }
    this.alreadyPlayed.themes.push(chosenTheme);
    this.round.theme = chosenTheme;
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
      playerInTurn: {
        id: this.playerInTurn.id,
        nick: this.playerInTurn.nick,
      },
      players: this.getPlayers().map(p => p.dto()),
      round: {
        ...this.round,
      }
    };
  }

}


export default Room;
