import PropTypes from 'prop-types';
import React, { useMemo } from 'react';
import WordGuessingPlayerView from './WordGuessingPlayerView';
import WordPickerPlayerView from './WordPickerPlayerView';

function Match({ room }) {
  const myPlayer = useMemo(
    () => room.players.find((player) => player.id === '2'),
    [room]
  );
  const wordPickerId = room.round.playerInTurn.id;

  return (
    <div
      className="flex flex-col items-center justify-evenly gap-2 grow
      w-full p-0.5 overflow-hidden"
    >
      <p className="page-title">{room.round.theme}</p>
      {myPlayer && myPlayer.id !== wordPickerId ? (
        <WordGuessingPlayerView player={myPlayer} />
      ) : (
        <WordPickerPlayerView players={room.players} />
      )}
    </div>
  );
}

Match.propTypes = {
  room: PropTypes.shape({
    round: PropTypes.shape({
      theme: PropTypes.string,
      playerInTurn: PropTypes.shape({
        id: PropTypes.string,
      }),
    }),
    players: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        nick: PropTypes.string,
        points: PropTypes.number,
      })
    ),
  }).isRequired,
};

export default Match;
