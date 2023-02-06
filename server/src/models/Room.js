import lodash from 'lodash';
import gc from '../config/gameConstraints.js';
import roomTimerController from '../room/roomTimerController.js';


const EMPTY_PLAYERINTURN = {
  id: '',
  nick: '',
  isWatching: false,
};
const EMPTY_ROUND = {
  state: gc.ROOM_MATCH_STATES.waiting,
  stageDuration: 0,
  stageEndTime: 0,
  theme: '',
  word: ''
};

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
    this.playerInTurn = { ...EMPTY_PLAYERINTURN };
    this.round = { ...EMPTY_ROUND };
    this.alreadyPlayed = {
      players: [],
      themes: []
    };
    this.totalPlayers = 0;
    this.players = new Map();
    this.add(owner);
  }

  nextRound(skippedRound) {
    if (this.round.state === gc.ROOM_MATCH_STATES.finished) return false;

    if ((this.currentRound >= this.totalRounds && !skippedRound) || !this.hasMinimumPlayers()) {
      this.round.state = gc.ROOM_MATCH_STATES.finished;
      roomTimerController.clear(this.id);
      return true;
    }

    if (!skippedRound) {
      this.currentRound++;
    }

    this.round.state = gc.ROOM_MATCH_STATES.choosingWord;
    this._reset();
    this._choosePlayerInTurn();
    this._chooseRoundTheme();
    this._setRoundTimers();

    roomTimerController.add(this, () => {
      this._skipRound();
    }, this.round.stageDuration);
    return true;
  }

  restart() {
    this.currentRound = 1;
    this.playerInTurn = { ...EMPTY_PLAYERINTURN };
    this.round = { ...EMPTY_ROUND };
    this.alreadyPlayed = {
      players: [],
      themes: []
    };

    this.getPlayers().forEach(p => {
      p.score = 0;
      p.isWatching = true;
      p.resetRound();
    });
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

    this._setRoundTimers();

    roomTimerController.add(this, () => {
      this._endRound();
    }, this.round.stageDuration);

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

  hasMinimumPlayers() {
    return this.size() >= gc.MIN_ROOM_PLAYERS;
  }

  add(player) {
    this.players.set(player.socketId, player);
    this.totalPlayers++;
  }

  contains(socketId) {
    return this.players.has(socketId);
  }

  remove(socketId) {
    this.players.delete(socketId);

    if (socketId === this.owner.socketId) {
      this.owner = lodash.sample(this.getPlayers());
    }
  }

  getPlayers() {
    return Array.from(this.players.values());
  }

  getPlayer(socketId) {
    return this.players.get(socketId);
  }

  size() {
    return this.players.size;
  }

  _skipRound() {
    this.round.state = gc.ROOM_MATCH_STATES.skippedRound;
    this._setRoundTimers();

    roomTimerController.add(this, () => {
      this.nextRound(true);
    }, this.round.stageDuration);
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

  _setRoundTimers() {
    this.round.stageDuration = this._getStageDuration() + gc.ADDITION_OF_REQUEST_TIME;
    this.round.stageEndTime = Date.now() + this.round.stageDuration;
  }

  _getStageDuration() {
    return gc.ROOM_ROUND_STAGE_DURATIONS[this.round.state][this.speed];
  }

  _checkRoundEnd() {
    const playersNotWatching = this.getPlayers().filter(p => !p.isWatching);
    const ended = playersNotWatching.every((p) => this._checkPlayerEndedRound(p));

    if (!ended) return;

    this._endRound();
  }

  _validateRoundWord() {
    const isInvalidCount = this.getPlayers()
      .filter(p => !p.isValidRoundWord())
      .length;
    const votesToInvalidate = (this.size() - 1) / 2;
    return isInvalidCount < votesToInvalidate;
  }

  _endRound() {
    this.round.state = gc.ROOM_MATCH_STATES.endedRound;
    this._setRoundTimers();

    roomTimerController.add(this, () => {
      const isValidWord = this._validateRoundWord();
      if (isValidWord) {
        this.getPlayers().forEach(p => p.calculateScore(this.round.word));
      }
      this.nextRound(false);
    }, this.round.stageDuration);
  }

  _checkPlayerEndedRound(player) {
    return player.round.word === this.round.word ||
      player.getErrorsCount() >= gc.MAX_PLAYER_ROUND_ERRORS;
  }

  _getPlayersDtos() {
    return this.getPlayers()
      .sort((p1, p2) => p2.score - p1.score)
      .map(player => player.dto());
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
      players: this._getPlayersDtos(),
      round: {
        state: this.round.state,
        theme: this.round.theme,
        stageDuration: this.round.stageDuration,
        stageEndTime: this.round.stageEndTime,
        word: this.round.state === gc.ROOM_MATCH_STATES.endedRound ? this.round.word : ''
      }
    };
  }

}

export default Room;
