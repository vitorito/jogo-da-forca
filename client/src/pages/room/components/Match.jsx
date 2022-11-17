import PropTypes from 'prop-types';
import React, { useMemo } from 'react';
import gc from '../../../config/gameConstraints';
import startGame from '../../../socket/startGame';
import WaitingRoomView from './WaitingRoomView';
import WordGuessingPlayerView from './WordGuessingPlayerView';
import WordPickerPlayerView from './WordPickerPlayerView';

function Match({ room }) {
  const myPlayer = useMemo(
    () => room.players.find((player) => player.id === '300001'),
    [room]
  );

  if (room.round.state === gc.ROOM_MATCH_STATES.waiting) {
    return (
      <WaitingRoomView
        isOwner={room.owner === myPlayer?.id}
        start={() => startGame(room.id)}
      />
    );
  }

  return (
    <div
      className="flex flex-col items-center justify-evenly gap-2 grow
      w-full p-0.5 overflow-hidden"
    >
      <p className="page-title">{room.round.theme}</p>
      {myPlayer && myPlayer.isWatching ? (
        <WordPickerPlayerView players={room.players} />
      ) : (
        <WordGuessingPlayerView player={myPlayer} />
      )}
    </div>
  );
}

Match.propTypes = {
  room: PropTypes.shape({
    id: PropTypes.string.isRequired,
    owner: PropTypes.string.isRequired,
    round: PropTypes.shape({
      theme: PropTypes.string,
      playerInTurn: PropTypes.string,
      state: PropTypes.oneOf(Object.values(gc.ROOM_MATCH_STATES)),
    }),
    players: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        nick: PropTypes.string,
        points: PropTypes.number,
        isWatching: PropTypes.bool,
        round: PropTypes.shape({
          word: PropTypes.string,
          errors: PropTypes.number,
          correctLetters: PropTypes.arrayOf(PropTypes.string),
          wrongLetters: PropTypes.arrayOf(PropTypes.string),
        }),
      })
    ),
  }).isRequired,
};

export default Match;
