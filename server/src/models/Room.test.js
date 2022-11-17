/* eslint-disable no-undef */
import gc from '../config/gameConstraints';
import Player from './Player';
import Room from './Room';

const player = new Player('socketId', '300001', 'nickname');
const roomData = {
  id: '3000',
  owner: player,
  password: '',
  speed: 'fast',
  themes: ['name', 'color'],
  totalRounds: 10
};

describe('room creation', () => {
  test('should create a room', () => {
    const room = new Room(roomData);

    expect(room.id).toBe(roomData.id);
    expect(room.owner).toBe(player);
    expect(room.isPrivate).toBe(false);
    expect(room.password).toBe(roomData.password);
    expect(room.speed).toBe(roomData.speed);
    expect(room.themes).toBe(roomData.themes);
    expect(room.totalRounds).toBe(roomData.totalRounds);
    expect(room.currentRound).toBe(1);
    expect(room.players.size).toBe(1);
    expect(room.players.has(player.socketId)).toBe(true);
    expect(room.playerInTurn).toBe('');
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
    const room = new Room(roomData);
    room.start();

    expect(room.currentRound).toBe(1);
    expect(room.playerInTurn).toBe(player.id);
    expect(room.round.state).toBe(gc.ROOM_MATCH_STATES.running);
    expect(roomData.themes).toContain(room.round.theme);
  });
});
