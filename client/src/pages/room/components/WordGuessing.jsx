/* eslint-disable react/no-array-index-key */
import PropTypes from 'prop-types';
import React from 'react';
import gc from '../../../config/gameConstraints';

function WordGuessing({ word, className }) {
  return (
    <div
      className={`flex flex-wrap justify-center gap-1 max-w-2xl py-2
      ${className}`}
    >
      {word.split('').map((letter, index) => (
        <span
          key={index}
          className="w-7 sm:w-8 sm:h-10 aspect-square mt-1 border-b-2 border-black
          text-2xl sm:text-3xl leading-none text-center"
        >
          {letter === gc.HIDDEN_LETTER ? '' : letter}
        </span>
      ))}
    </div>
  );
}

WordGuessing.defaultProps = {
  word: '',
  className: '',
};

WordGuessing.propTypes = {
  word: PropTypes.string,
  className: PropTypes.string,
};

export default WordGuessing;
