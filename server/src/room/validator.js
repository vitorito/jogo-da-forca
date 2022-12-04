import gc from '../config/gameConstraints.js';

export function validatePlayerData(player) {
  try {
    const trimedSocketId = player.socketId.trim();
    const trimedNick = player.nick.trim();

    if (!trimedSocketId || trimedSocketId.length !== player.socketId.length) {
      return false;
    }

    if (!trimedNick ||
      trimedNick.length !== player.nick.length ||
      player.nick.length > gc.MAX_NICK_LENGTH) {
      return false;
    }
    return true;
  } catch (error) {
    return false;
  }
}

export function validateRoomData(room) {
  try {
    const { password, totalRounds, speed, themes } = room;

    if (password.length !== 0 && password.length !== gc.ROOM_PASSWORD_LENGTH) {
      return false;
    }

    if (totalRounds < gc.MIN_MATCH_ROUNDS || totalRounds > gc.MAX_MATCH_ROUNDS) {
      return false;
    }

    const availableSpeeds = Object.keys(gc.ROOM_SPEED_IN_SECONDS);
    if (!availableSpeeds.includes(speed)) {
      return false;
    }

    const hasInvalidThemes = themes.some(t => {
      const theme = t.trim();
      return theme.length === 0 || theme.length > gc.MAX_ROOM_THEME_LENGTH;
    });
    if (themes.length === 0 || hasInvalidThemes) {
      return false;
    }
    return true;
  } catch (error) {
    return false;
  }
}
