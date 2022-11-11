import gc from '../config/gameConstraints';

export function validatePlayer(player) {
  const errors = [];
  try {
    const trimedTolkenId = player.tolkenId.trim();
    const trimedNick = player.nick.trim();

    if (!trimedTolkenId || trimedTolkenId.length !== player.tolkenId.length) {
      errors.push('Invalid player tolken id');
    }

    if (!trimedNick ||
      trimedNick.length !== player.nick.length ||
      player.nick.length > gc.MAX_NICK_LENGTH) {
      errors.push('Invalid player nick');
    }
  } catch (error) {
    errors.push('Invalid player data');
  }
  return errors;
}

export function validateRoomData(room) {
  const errors = [];
  try {
    const { password, totalRounds, speed, themes } = room;

    if (password.length !== 0 && password.length !== gc.ROOM_PASSWORD_LENGTH) {
      errors.push('Invalid room password');
    }

    if (totalRounds < gc.MIN_MATCH_ROUNDS || totalRounds > gc.MAX_MATCH_ROUNDS) {
      errors.push('Invalid room total rounds');
    }

    const availableSpeeds = Object.keys(gc.ROOM_SPEED_IN_SECONDS);
    if (!availableSpeeds.includes(speed)) {
      errors.push('Invalid room speed');
    }

    const hasInvalidThemes = themes.some(t => {
      const theme = t.trim();
      return theme.length === 0 || theme.length > gc.MAX_ROOM_THEME_LENGTH;
    });
    if (themes.length === 0 || hasInvalidThemes) {
      errors.push('Invalid room themes');
    }
  } catch (error) {
    errors.push('Invalid room data');
  }
  return errors;
}
