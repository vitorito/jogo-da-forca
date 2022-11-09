import PropTypes from 'prop-types';
import React from 'react';
import ScrollableContainer from '../../../components/ScrollableContainer';
import Gallow from './Gallow';
import Keyboard from './Keyboard';

function WordGuessingPlayerView({ player }) {
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

WordGuessingPlayerView.propTypes = {
  player: PropTypes.shape({
    round: PropTypes.shape({
      word: PropTypes.string,
      correctLetters: PropTypes.arrayOf(PropTypes.string),
      wrongLetters: PropTypes.arrayOf(PropTypes.string),
    }),
  }).isRequired,
};

export default WordGuessingPlayerView;