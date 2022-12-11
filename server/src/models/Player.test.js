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
    expect(player.round.correctLetters).toStrictEqual(['b', 'a', 'n'])
    expect(player.round.wrongLetters).toStrictEqual([]);
  })

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
});
