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
      nick: '',
      isWatching: false,
    };
    this.round = {
      state: gc.ROOM_MATCH_STATES.waiting,
      theme: '',
      word: ''
    };
    this.alreadyPlayed = {
      players: [],
      themes: []
    };
    this.players = new Map();
    this.add(owner);
  }

  nextRound() {
    if (this.round.state !== gc.ROOM_MATCH_STATES.waiting) {
      this.currentRound++;
      this._reset();
    }
    this.round.state = gc.ROOM_MATCH_STATES.choosingWord;
    this._choosePlayerInTurn();
    this._chooseRoundTheme();
  }

  chooseRoundWord(socketId, word) {
    if (!socketId || socketId !== this.playerInTurn.socketId) return false;

    this.round.word = word;
    const hiddenWord = this._hideWord(word.length);
    this.getPlayers().forEach(p => {
      p.round.word = hiddenWord;
      if (p.socketId !== this.playerInTurn.socketId) {
        p.isWatching = false;
      }
    });
    this.playerInTurn.isWatching = true;
    this.round.state = gc.ROOM_MATCH_STATES.running;

    return true;
  }

  guessLetter(socketId, letter) {
    if (!socketId || socketId === this.playerInTurn.socketId ||
      this.round.state !== gc.ROOM_MATCH_STATES.running) {
      return false;
    }

    const player = this.players.get(socketId);
    if (!player) return false;

    const guessed = player.guessLetter(this.round.word, letter);

    if (guessed && this._checkPlayerEndedRound(player)) {
      this._checkRoundEnd();
    }

    return guessed;
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

  _chooseRoundTheme() {
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

  _reset() {
    this.getPlayers().forEach(p => p.resetRound());
  }

  _choosePlayerInTurn() {
    const players = this.getPlayers();
    const notPlayed = players.filter((p) => !this.alreadyPlayed.players.includes(p.socketId));

    let chosenPlayer;

    if (notPlayed.length) {
      chosenPlayer = lodash.sample(notPlayed);
    } else {
      this.alreadyPlayed.players = [];
      chosenPlayer = lodash.sample(players);
    }
    this.playerInTurn = chosenPlayer;
    this.alreadyPlayed.players.push(chosenPlayer.socketId);

    players.forEach(p => {
      p.isWatching = p.socketId === this.playerInTurn.socketId;
    });
  }

  _hideWord(length) {
    return gc.HIDDEN_LETTER.repeat(length);
  }

  _checkRoundEnd() {
    const playersNotWatching = this.getPlayers().filter(p => !p.isWatching);
    const ended = playersNotWatching.every((p) => this._checkPlayerEndedRound(p));

    if (ended) {
      playersNotWatching.forEach(p => p.calculateScore(this.round.word));
      this.nextRound();
    }
  }

  _checkPlayerEndedRound(player) {
    return player.round.word === this.round.word ||
      player.getErrorsCount() >= gc.MAX_PLAYER_ROUND_ERRORS;
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
        state: this.round.state,
        theme: this.round.theme,
      }
    };
  }

}

export default Room;
