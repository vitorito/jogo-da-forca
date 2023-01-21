export default {
  MAX_PLAYER_ROUND_ERRORS: 6,
  MIN_MATCH_ROUNDS: 2,
  MAX_MATCH_ROUNDS: 20,
  ROOM_ID_LENGTH: 4,
  MIN_ROOM_ID: 3000,
  MAX_ROOM_ID: 9999,
  ROOM_PASSWORD_LENGTH: 4,
  MIN_ROOM_THEMES: 1,
  MAX_ROOM_THEMES: 20,
  MAX_ROOM_THEME_LENGTH: 20,
  MIN_ROOM_PLAYERS: 2,
  MAX_ROOM_PLAYERS: 10,
  MAX_NICK_LENGTH: 20,
  HIDDEN_LETTER: '*',
  ROOM_MATCH_STATES: {
    waiting: 'waiting',
    running: 'running',
    skippedRound: 'skipped_round',
    choosingWord: 'choosing_word',
    finished: 'finished',
  },
  ROOM_SPEEDS: ['lazy', 'medium', 'fast'],
  ROOM_ROUND_STAGE_DURATIONS: {
    choosing_word: {
      lazy: 15000,
      medium: 15000,
      fast: 15000,
    },
    skipped_round: {
      lazy: 50000,
      medium: 50000,
      fast: 50000,
    },
    running: {
      lazy: 60000,
      medium: 45000,
      fast: 30000,
    }
  },
  ADDITION_OF_REQUEST_TIME: 2000,
  CORRECT_WORD_POINTS: 10,
};
