/* eslint-disable no-undef */
import supertest from 'supertest';
import app from '../app.js';
import gc from '../config/gameConstraints.js';
import roomRepository from './roomRepository.js';

const request = supertest(app);

const REQUEST_BODY = {
  player: {
    socketId: 'socketId',
    nick: 'player',
  },
  roomData: {
    password: 'abcd',
    totalRounds: 20,
    speed: 'lazy',
    themes: ['fruta', 'nome'],
  }
};

async function createDefaultRoom() {
  const res = await request.post('/room').send(REQUEST_BODY);
  return res.body.id;
}

beforeEach(() => {
  roomRepository.deleteAll();
});

describe('Rooms creation', () => {
  test('should return id when creating room', async () => {
    const res = await request.post('/room').send(REQUEST_BODY);

    expect(res.statusCode).toBe(201);
    expect(res.body.id).toHaveLength(gc.ROOM_ID_LENGTH);
    expect(parseInt(res.body.id, 10)).toBeGreaterThanOrEqual(gc.MIN_ROOM_ID);
  });

  test('should return errors when creating room with invalid data', async () => {
    const body = {
      player: {
        socketId: '',
        nick: 'too_long_player_nickname',
      },
      roomData: {
        password: '121',
        totalRounds: 0,
        speed: 'wrong_speed',
        themes: ['too_too_long_theme_name'],
      }
    };

    const res = await request.post('/room').send(body);
    expect(res.statusCode).toBe(400);
    expect(res.body.errors.length).toBe(6);
  });
});

describe('Get room', () => {
  test('should return a room', async () => {
    const roomId = await createDefaultRoom();
    const res = await request.get(`/room/${roomId}`)
      .set('socketid', REQUEST_BODY.player.socketId);
    expect(res.statusCode).toBe(200);

    const room = res.body;
    expect(room.id).toBe(roomId);
    expect(room.speed).toBe(REQUEST_BODY.roomData.speed);
    expect(room.themes).toStrictEqual(REQUEST_BODY.roomData.themes);
    expect(room.isPrivate).toBe(true);
    expect(room.players.length).toBe(1);
    expect(room.players[0].id).toBe(roomId + '01');
    expect(room.players[0].nick).toBe(REQUEST_BODY.player.nick);
    expect(room.round).toStrictEqual({
      state: gc.ROOM_MATCH_STATES.waiting,
      current: 1,
      totalRounds: REQUEST_BODY.roomData.totalRounds
    });
  });

  test('should return 404 when trying to get a non-existing room', async () => {
    const res = await request.get('/room/some_id').set('socketid', 'socketId');
    expect(res.statusCode).toBe(404);
  });

  test('should return 401 when trying to get a room without a socketid header', async () => {
    const roomId = 'some_id';
    const res = await request.get(`/room/${roomId}`);
    expect(res.statusCode).toBe(401);
  });

  test('should return 403 when trying to get a room the player does not belong to', async () => {
    const roomId = await createDefaultRoom();
    const res = await request.get(`/room/${roomId}`)
      .set('socketid', 'wrong_socket_id');
    expect(res.statusCode).toBe(403);
  });
});
