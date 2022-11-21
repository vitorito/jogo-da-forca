import PropTypes from 'prop-types';
import React from 'react';
import ScrollableContainer from '../../../../components/ScrollableContainer';
import Gallow from '../Gallow';
import Keyboard from '../Keyboard';

function NotInTurnPlayerView({ player }) {
  const { correctLetters, wrongLetters } = player.round;
  return (
    <>
      <Gallow player={player} />
      <ScrollableContainer className="shadow-none px-0">
        <Keyboard correctLetters={correctLetters} wrongLetters={wrongLetters} />
      </ScrollableContainer>
    </>
  );
}

NotInTurnPlayerView.propTypes = {
  player: PropTypes.shape({
    round: PropTypes.shape({
      word: PropTypes.string,
      errors: PropTypes.number,
      correctLetters: PropTypes.arrayOf(PropTypes.string),
      wrongLetters: PropTypes.arrayOf(PropTypes.string),
    }),
  }).isRequired,
};

export default NotInTurnPlayerView;
