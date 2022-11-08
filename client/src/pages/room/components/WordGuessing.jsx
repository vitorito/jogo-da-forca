/* eslint-disable react/no-array-index-key */
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import gc from '../../../config/gameConstraints';
import { MatchContext } from '../../../providers/MatchProvider';

function WordGuessing({ className }) {
  const { word } = useContext(MatchContext).room.round.state;
  return (
    <div
      className={`flex flex-wrap justify-center gap-1
      ${className}`}
    >
      {word.split('').map((letter, index) => (
        <span
          key={index}
          className="w-7 sm:w-10 aspect-square mt-1 border-b-2 border-black
          text-2xl sm:text-4xl leading-none text-center"
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
