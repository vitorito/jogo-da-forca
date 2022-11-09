import PropTypes from 'prop-types';
import React from 'react';
import RopeIcon from '../../../components/RopeIcon';
import BodyDrawing from './BodyDrawing';
import WordGuessing from './WordGuessing';

function Gallow({ player, className }) {
  return (
    <div className={`flex flex-col items-center justify-evenly grow gap-1 ${className}`}>
      <div className="relative w-fit mx-auto z-10">
        <div className="bg-yellow-700 w-40 h-5 ml-2 rounded shadow shadow-black/70" />
        <div className="bg-yellow-900 w-20 h-3 absolute left-1/4 top-6 rotate-[-35deg] z-[-1]" />
        <RopeIcon className="w-10 absolute right-[16%] fill-slate-900" />
        <BodyDrawing members={player.round.wrongLetters.length} />
        <div className="bg-yellow-700 w-7 h-40 ml-9 shadow shadow-black" />
        <div className="bg-yellow-900 w-44 h-3 rounded shadow-md shadow-black/70" />
      </div>
      <WordGuessing word={player.round.word} />
    </div>
  );
}

Gallow.defaultProps = {
  player: {
    round: {
      word: '',
      wrongLetters: [],
    },
  },
  className: '',
};

Gallow.propTypes = {
  className: PropTypes.string,
  player: PropTypes.shape({
    round: PropTypes.shape({
      word: PropTypes.string,
      wrongLetters: PropTypes.arrayOf(PropTypes.string),
    }),
  }),
};

export default Gallow;
