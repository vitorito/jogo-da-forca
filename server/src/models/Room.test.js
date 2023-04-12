/* eslint-disable no-undef */
import { jest } from '@jest/globals';
import gc from '../config/gameConstraints';
import Player from './Player';
import Room from './Room';

let player, player2, room, roomData;

jest.useFakeTimers();

const setup = () => {
  player = new Player('socketId', '300001', 'nickn');
  player2 = new Player('socketId2', '300002', 'nick2');

  roomData = {
    id: '3000',
    owner: player,
    password: '',
    speed: 'fast',
    themes: ['name', 'color'],
    totalRounds: 10
  };
  room = new Room(roomData);
};

beforeEach(() => {
  setup();
});

describe('room creation', () => {
  test('should create a room', () => {
    expect(room.id).toBe(roomData.id);
    expect(room.owner).toStrictEqual(player);
    expect(room.isPrivate).toBe(false);
    expect(room.password).toBe(roomData.password);
    expect(room.speed).toBe(roomData.speed);
    expect(room.themes).toBe(roomData.themes);
    expect(room.totalRounds).toBe(roomData.totalRounds);
    expect(room.currentRound).toBe(1);
    expect(room.players.size).toBe(1);
    expect(room.players.has(player.socketId)).toBe(true);
    expect(room.playerInTurn).toEqual({
      id: '',
      nick: '',
      isWatching: false,
    });
    expect(room.round.state).toBe(gc.ROOM_MATCH_STATES.waiting);
    expect(room.round.theme).toBe('');
    expect(room.alreadyPlayed).toStrictEqual({
      players: [],
      themes: []
    });
  });
});


describe('next round', () => {
  test('should start the room', () => {
    room.add(player2);
    room.nextRound(true);

    expect(room.currentRound).toBe(1);
    expect([player, player2]).toContain(room.playerInTurn);
    expect(room.alreadyPlayed.players.length).toBe(1);
    expect(room.alreadyPlayed.themes).toContain(room.round.theme);
    expect(room.round.state).toBe(gc.ROOM_MATCH_STATES.choosingWord);
  });

  test('should choose another player and theme', () => {
    room.add(player2);
    room.nextRound(true);

    const expectedTheme = room.round.theme === room.themes[0] ? room.themes[1] : room.themes[0];
    const expectedPlayer = room.playerInTurn === player ? player2 : player;

    room.nextRound(false);

    expect(room.currentRound).toBe(2);
    expect(room.playerInTurn).toStrictEqual(expectedPlayer);
    expect(room.round.state).toBe(gc.ROOM_MATCH_STATES.choosingWord);
    expect(room.alreadyPlayed.players).toContain(player.socketId);
    expect(room.alreadyPlayed.players).toContain(player2.socketId);
    expect(room.alreadyPlayed.themes).toContain(room.themes[0]);
    expect(room.alreadyPlayed.themes).toContain(room.themes[1]);
    expect(room.round.theme).toBe(expectedTheme);
  });

  test('should go to next round when the player complete the word', () => {
    const player2 = new Player('socketId2', '300002', 'nick2');
    const word = 'aaaaaaa';

    room.add(player2);
    room.nextRound(true);


    room.chooseRoundWord(room.playerInTurn.socketId, word);

    const playerNotInTurn = room.playerInTurn === player ? player2 : player;

    room.guessLetter(playerNotInTurn.socketId, 'a');
    jest.runOnlyPendingTimers();

    expect(room.currentRound).toBe(2);
    expect(room.round.state).toBe(gc.ROOM_MATCH_STATES.choosingWord);
  });

  test('should go to next round when the max errors are reached', () => {
    const player2 = new Player('socketId2', '300002', 'nick2');
    const word = 'aaaaaaa';

    room.add(player2);
    room.nextRound(true);


    room.chooseRoundWord(room.playerInTurn.socketId, word);

    const playerNotInTurn = room.playerInTurn === player ? player2 : player;

    room.guessLetter(playerNotInTurn.socketId, 'j');
    room.guessLetter(playerNotInTurn.socketId, 'k');
    room.guessLetter(playerNotInTurn.socketId, 'l');
    room.guessLetter(playerNotInTurn.socketId, 'm');
    room.guessLetter(playerNotInTurn.socketId, 'n');

    expect(room.currentRound).toBe(1);
    expect(room.round.state).toBe(gc.ROOM_MATCH_STATES.running);

    room.guessLetter(playerNotInTurn.socketId, 'o');
    jest.runOnlyPendingTimers();

    expect(room.currentRound).toBe(2);
    expect(room.round.state).toBe(gc.ROOM_MATCH_STATES.choosingWord);
  });

  test('should choose the word of the round', () => {
    const word = 'banana';

    room.add(player2);

    room.nextRound(false);
    room.chooseRoundWord(room.playerInTurn.socketId, word);

    expect(room.round.state).toBe(gc.ROOM_MATCH_STATES.running);
    expect(room.round.word).toBe(word);
    const players = room.getPlayers();

    const allPlayersHaveTheWord = players.every(p => p.round.word === '******');
    expect(allPlayersHaveTheWord).toBe(true);

    expect(room.playerInTurn.isWatching).toBe(true);
    const allPlayersNotWatching = players.every(p => (
      p.socketId === room.playerInTurn.socketId || !p.isWatching
    ));
    expect(allPlayersNotWatching).toBe(true);
  });

});

describe('guess letter', () => {
  test('should return true when the guess is made', () => {
    const word = 'banana';
    const letter = 'j';
    const player2 = new Player("socketId2", room.id + '02', 'nick2');

    room.add(player2);
    room.playerInTurn = player;
    room.round.state = gc.ROOM_MATCH_STATES.choosingWord;

    room.chooseRoundWord(player.socketId, word);

    const guessed = room.guessLetter(player2.socketId, letter);
    expect(guessed).toBe(true);
  });

  test('should return false when the room are not started', () => {
    const letter = 'a';
    const guessed = room.guessLetter(player.socketId, letter);

    expect(guessed).toBe(false);
  });

  test("should return false when the room doesn't have a round word chosen", () => {
    const letter = 'a';

    room.nextRound(true);
    const guessed = room.guessLetter(player.socketId, letter);

    expect(guessed).toBe(false);
  });

  test("should return false when the player is in turn", () => {
    const letter = 'a';
    const word = 'banana';

    room.nextRound(false);
    room.chooseRoundWord(player.socketId, word);

    const guessed = room.guessLetter(player.socketId, letter);

    expect(guessed).toBe(false);
  });

  test('should return false when the room does not contain the player', () => {
    const word = 'banana';
    const letter = 'a';
    room.nextRound(false);
    room.chooseRoundWord(word);

    const socketId = 'randomId';
    const guessed = room.guessLetter(socketId, letter);
    expect(guessed).toBe(false);
  });
});

describe('restart', () => {
  test('should restart the room', () => {
    const expectedRoom = new Room(roomData);
    const player2Copy = new Player('socketId2', '300002', 'nick2');
    expectedRoom.add(player2Copy);

    room.add(player2);
    room.nextRound(false);

    const playerNotInTurn = room.playerInTurn.socketId === player.socketId ? player2 : player;

    room.chooseRoundWord(room.playerInTurn.socketId, 'banana');
    room.guessLetter(playerNotInTurn.socketId, 'a');

    room.restart();

    expect(room).toStrictEqual(expectedRoom);
  });
});
