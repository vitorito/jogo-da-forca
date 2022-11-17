import gc from '../config/gameConstraints';
import Player from './Player';
import Room from './Room';

/* eslint-disable no-undef */
describe('room creation', () => {
  test('should create a room', () => {
    const owner = new Player('socketId', '300001', 'nickname');
    const roomData = {
      id: '3000',
      owner,
      password: '',
      speed: 'fast',
      themes: ['name', 'color'],
      totalRounds: 10
    };
    const room = new Room(roomData);

    expect(room.id).toBe(roomData.id);
    expect(room.owner).toBe(owner);
    expect(room.isPrivate).toBe(false);
    expect(room.password).toBe(roomData.password);
    expect(room.speed).toBe(roomData.speed);
    expect(room.themes).toBe(roomData.themes);
    expect(room.totalRounds).toBe(roomData.totalRounds);
    expect(room.currentRound).toBe(1);
    expect(room.players.size).toBe(1);
    expect(room.players.has(owner.socketId)).toBe(true);
    expect(room.playerInTurn).toBe('');
    expect(room.round.state).toBe(gc.ROOM_MATCH_STATES.waiting);
    expect(room.round.theme).toBe('');
    expect(room.alreadyPlayed).toStrictEqual({
      players: [],
      themes: []
    });
  });
});
