import PropTypes from 'prop-types';
import React from 'react';
import ScrollableContainer from '../../../../components/ScrollableContainer';
import Gallow from '../gallow/Gallow';
import Keyboard from '../gallow/Keyboard';

function NotInTurnPlayerView({ player, playerInTurnNick, theme }) {
  const { correctLetters, wrongLetters } = player.round;

  if (!player.isWatching) {
    return null;
  }

  return (
    <>
      <p className="page-title">{theme}</p>
      <Gallow player={player} className="grow-0 animate-pulse" />
      {player.round.word ? (
        <ScrollableContainer className="shadow-none px-0">
          <Keyboard
            correctLetters={correctLetters}
            wrongLetters={wrongLetters}
          />
        </ScrollableContainer>
      ) : (
        <span className='max-w-full'>
          <span
            className="block w-full text-3xl font-mono text-center break-words"
          >
            {playerInTurnNick}
          </span>
          <span className="block text-center mt-2 text-lg sm:text-xl animate-bounce">
            está escolhendo a palavra...
          </span>
        </span>
      )}
    </>
  );
}

NotInTurnPlayerView.propTypes = {
  playerInTurnNick: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
  player: PropTypes.shape({
    isWatching: PropTypes.bool.isRequired,
    round: PropTypes.shape({
      word: PropTypes.string,
      errors: PropTypes.number,
      correctLetters: PropTypes.arrayOf(PropTypes.string),
      wrongLetters: PropTypes.arrayOf(PropTypes.string),
    }),
  }).isRequired,
};

export default NotInTurnPlayerView;
