export default {
  MIN_MATCH_ROUNDS: 1,
  MAX_MATCH_ROUNDS: 20,
  ROOM_ID_LENGTH: 4,
  MIN_ROOM_ID: 3000,
  ROOM_PASSWORD_LENGTH: 4,
  MIN_ROOM_THEMES: 1,
  MAX_ROOM_THEMES: 20,
  MAX_ROOM_THEME_LENGTH: 20,
  MAX_ROOM_PLAYERS: 10,
  MAX_NICK_LENGTH: 20,
  ROOM_SPEED_IN_SECONDS: {
    lazy: 60,
    medium: 45,
    fast: 30,
  },
  HIDDEN_LETTER: '*',
  ROOM_MATCH_STATES: {
    waiting: 'waiting',
    running: 'running',
  }
};
