import PropTypes from 'prop-types';
import React, { useMemo } from 'react';
import ScrollableContainer from '../../../components/ScrollableContainer';
import Gallow from './Gallow';
import Keyboard from './Keyboard';

function Match({ room }) {
  const myPlayer = useMemo(
    () => room.players.find((player) => player.id === '2'),
    [room]
  );
  const wordPickerId = room.round.playerInTurn.id;

  if (myPlayer && myPlayer.id !== wordPickerId) {
    const { correctLetters, wrongLetters } = myPlayer.round;
    return (
      <div className="flex flex-col items-center justify-evenly gap-2 grow w-full">
        <p className="page-title">{room.round.theme}</p>
        <Gallow player={myPlayer} />
        <ScrollableContainer className="shadow-none px-0">
          <Keyboard
            correctLetters={correctLetters}
            wrongLetters={wrongLetters}
          />
        </ScrollableContainer>
      </div>
    );
  }

  return (
    <div className="grow">
      {room.players.map((player) => (
        <Gallow key={player.id} player={player} />
      ))}
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
