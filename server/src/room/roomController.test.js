/* eslint-disable no-undef */
import supertest from 'supertest';
import app from '../app.js';
import gc from '../config/gameConstraints.js';

const request = supertest(app);

describe('Rooms creation', () => {
  test('should return id when creating room', async () => {
    const body = {
      player: {
        tolkenId: 'tolkenId',
        nick: 'player',
      },
      roomData: {
        password: 'abcd',
        totalRounds: 20,
        speed: 'lazy',
        themes: ['fruta', 'nome'],
      }
    };

    const res = await request.post('/room').send(body);
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveLength(gc.ROOM_ID_LENGTH)
    expect(parseInt(res.body, 10)).toBeGreaterThanOrEqual(gc.MIN_ROOM_ID)
  });

});
