/* eslint-disable react/no-array-index-key */
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import gc from '../../../config/gameConstraints';
import { MatchContext } from '../../../providers/MatchProvider';

function WordGuessing({ className }) {
  const { word } = useContext(MatchContext).room.round.state;
  return (
    <div
      className={`flex flex-wrap justify-center gap-1 mt-2
      text-2xl leading-none ${className}`}
    >
      {word.split('').map((letter, index) => (
        <span
          key={index}
          className="w-7 h-7 mt-2 border-b-2 border-black text-center"
        >
          {letter === gc.HIDDEN_LETTER ? '' : letter}
        </span>
      ))}
    </div>
  );
}

WordGuessing.defaultProps = {
  className: '',
};

WordGuessing.propTypes = {
  className: PropTypes.string,
};

export default WordGuessing;
