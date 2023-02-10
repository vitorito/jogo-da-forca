import gc from '../config/gameConstraints.js';

const LETTERS_VARIATIONS = {
  'áàäãâ': 'a',
  'éèëẽê': 'e',
  'íìïĩî': 'i',
  'óòöõô': 'o',
  'úùüũû': 'u',
  'ñ': 'n',
  'ç': 'c',
};

class Player {
  constructor(socketId, id, nick) {
    this.socketId = socketId;
    this.id = id;
    this.nick = nick;
    this.score = 0;
    this.isWatching = true;
    this.round = {
      word: '',
      score: 0,
      isValidRoundWord: true,
      correctLetters: [],
      wrongLetters: [],
    };
  }

  guessLetter(roundWord, letter) {
    if (this.getErrorsCount() >= gc.MAX_PLAYER_ROUND_ERRORS ||
      !this.round.word.includes(gc.HIDDEN_LETTER)) return false;

    const splitedWord = this.round.word.split('');

    let includes = false;
    const letterLowercase = letter.toLowerCase();
    const roundWordLowercase = roundWord.toLowerCase();

    for (const i in roundWord) {
      const roundWordLetterLowercase = roundWordLowercase[i];
      if (letterLowercase === roundWordLetterLowercase ||
        letterLowercase === getLetterVariation(roundWordLetterLowercase)) {
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

  calculateScore(roundWord) {
    if (this.round.word !== roundWord || !this.round.isValidRoundWord) {
      return;
    }

    let score = gc.CORRECT_WORD_POINTS;
    score += new Set(roundWord.split('')).size;
    score -= this.getErrorsCount();
    this.round.score = score;
    this.score += score;
  }

  resetRound() {
    this.round = {
      word: '',
      isValidRoundWord: true,
      score: 0,
      correctLetters: [],
      wrongLetters: [],
    };
  }

  getErrorsCount() {
    return this.round.wrongLetters.length;
  }

  validateRoundWord() {
    this.round.isValidRoundWord = !this.round.isValidRoundWord;
  }

  isValidRoundWord() {
    return this.round.isValidRoundWord;
  }

  dto() {
    return {
      id: this.id,
      nick: this.nick,
      score: this.score,
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

function getLetterVariation(letter) {
  for (const varation in LETTERS_VARIATIONS) {
    if (varation.includes(letter)) return LETTERS_VARIATIONS[varation];
  }
  return null;
}

export default Player;
