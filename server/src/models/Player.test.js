/* eslint-disable no-undef */

import Player from './Player';

let player;

const setup = () => {
  player = new Player('socketId', '300001', 'nickname');
};

beforeEach(() => {
  setup();
});

describe('guess letter', () => {
  test('should guess a correct letter', () => {
    const word = 'banana';
    const letter = 'a';
    player.round.word = '******';

    const guessed = player.guessLetter(word, letter);

    expect(guessed).toBe(true);
    expect(player.round.word).toBe('*a*a*a');
    expect(player.round.correctLetters).toContain(letter);
    expect(player.round.wrongLetters).toStrictEqual([]);
  });

  test('should guess a wrong letter', () => {
    const word = 'banana';
    const letter = 'j';
    player.round.word = '******';

    const guessed = player.guessLetter(word, letter);

    expect(guessed).toBe(true);
    expect(player.round.word).toBe('******');
    expect(player.round.correctLetters).toStrictEqual([]);
    expect(player.round.wrongLetters).toContain(letter);
  });

  test('should not guess a letter when the word is complete', () => {
    const word = 'banana';
    player.round.word = '******';

    let guessed = player.guessLetter(word, 'b');
    expect(guessed).toBe(true);

    guessed = player.guessLetter(word, 'a');
    expect(guessed).toBe(true);

    guessed = player.guessLetter(word, 'n');
    expect(guessed).toBe(true);

    guessed = player.guessLetter(word, 'c');
    expect(guessed).toBe(false);

    expect(player.round.word).toBe(word);
    expect(player.round.correctLetters).toStrictEqual(['b', 'a', 'n']);
    expect(player.round.wrongLetters).toStrictEqual([]);
  });

  test('should not guess a letter when the max errors are reached', () => {
    const word = 'banana';
    player.round.word = '******';

    let guessed = player.guessLetter(word, 'z');
    expect(guessed).toBe(true);

    guessed = player.guessLetter(word, 'x');
    expect(guessed).toBe(true);

    guessed = player.guessLetter(word, 'c');
    expect(guessed).toBe(true);

    guessed = player.guessLetter(word, 'v');
    expect(guessed).toBe(true);

    guessed = player.guessLetter(word, 'm');
    expect(guessed).toBe(true);

    guessed = player.guessLetter(word, 'q');
    expect(guessed).toBe(true);

    guessed = player.guessLetter(word, 'w');
    expect(guessed).toBe(false);

    expect(player.round.correctLetters).toStrictEqual([]);
    expect(player.round.wrongLetters).toStrictEqual(['z', 'x', 'c', 'v', 'm', 'q']);
  });

  test("should guess a letter when its a variation", () => {
    const lettertsLower = 'abcdefghijklmnopqrstuvwxyz';
    const lettertsUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const letterVariations = 'ááäãâÁÁÄÃÂéèëẽêÉÈËẼÊíìïĩîÍÌÏĨÎóòöõôÓÒÖÕÔúùüũûÚÙÜŨÛNñÑçÇ';
    const word = lettertsLower + lettertsUpper + letterVariations;
    player.round.word = "*".repeat(word.length);

    for (const l of lettertsLower) {
      const guessed = player.guessLetter(word, l);
      expect(guessed).toBe(true);
    }
    expect(player.round.word).toBe(word);
  });
});

describe('calculate score', () => {
  test("should calculate the score when the word has been completed without errors", () => {
    const word = 'banana';
    const expectedScore = 13;
    const playerPrevScore = 10;

    player.round.word = word;
    player.score = playerPrevScore;
    player.calculateScore(word);

    expect(player.score).toBe(playerPrevScore + expectedScore);
    expect(player.round.score).toBe(expectedScore);
  });

  test("should calculate the score when the word has been completed with errors", () => {
    const word = 'banana';
    const expectedScore = 8;

    player.round.word = word;
    player.round.wrongLetters = ['j', 'k', 'd', 'p', 'q'];
    player.calculateScore(word);

    expect(player.score).toBe(expectedScore);
    expect(player.round.score).toBe(expectedScore);
  });

  test("should calculate the score when the word has not been completed", () => {
    const word = 'banana';
    const expectedScore = 0;

    player.round.word = '*anana';
    player.round.wrongLetters = ['j', 'k', 'd', 'p', 'l', 'o'];
    player.calculateScore(word);

    expect(player.score).toBe(expectedScore);
    expect(player.round.score).toBe(expectedScore);
  });
});
