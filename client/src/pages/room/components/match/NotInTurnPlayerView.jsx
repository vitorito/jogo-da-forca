import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import ScrollableContainer from '../../../../components/ScrollableContainer';
import { MatchContext } from '../../../../providers/MatchProvider';
import Gallow from '../gallow/Gallow';
import Keyboard from '../gallow/Keyboard';

function NotInTurnPlayerView({ playerInTurnNick, theme }) {
  const { player } = useContext(MatchContext);
  const { correctLetters, wrongLetters } = player.round;

  return (
    <>
      <p className="page-title">{theme}</p>
      <Gallow
        player={player}
        className={player.round.word ? '' : 'grow-0 animate-pulse'}
      />
      {player.round.word ? (
        <ScrollableContainer className="shadow-none px-0">
          <Keyboard
            correctLetters={correctLetters}
            wrongLetters={wrongLetters}
          />
        </ScrollableContainer>
      ) : (
        <span className="max-w-full">
          <span className="block w-full text-3xl font-mono text-center break-words">
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
};

export default NotInTurnPlayerView;
