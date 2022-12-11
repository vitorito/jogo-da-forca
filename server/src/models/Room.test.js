/* eslint-disable no-undef */
import gc from '../config/gameConstraints';
import Player from './Player';
import Room from './Room';

let player, room, roomData;

const setup = () => {
  player = new Player('socketId', '300001', 'nickname');
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


describe('room start', () => {
  test('should start the room', () => {
    room.start();

    expect(room.currentRound).toBe(1);
    expect(room.playerInTurn).toStrictEqual(player);
    expect(room.round.state).toBe(gc.ROOM_MATCH_STATES.choosingWord);
    expect(roomData.themes).toContain(room.round.theme);
  });
});

describe('room next round', () => {
  test('should choose room round word', () => {
    const word = 'banana';
    room.start();
    room.chooseRoundWord(player.socketId, word);

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

    room.start();
    const guessed = room.guessLetter(player.socketId, letter);

    expect(guessed).toBe(false);
  });

  test("should return false when the player is in turn", () => {
    const letter = 'a';
    const word = 'banana';

    room.start();
    room.chooseRoundWord(player.socketId, word);

    const guessed = room.guessLetter(player.socketId, letter);

    expect(guessed).toBe(false);
  });

  test('should return false when the room does not contain the player', () => {
    const word = 'banana';
    const letter = 'a';
    room.start();
    room.chooseRoundWord(word);

    const socketId = 'randomId';
    const guessed = room.guessLetter(socketId, letter);
    expect(guessed).toBe(false);
  });
});
