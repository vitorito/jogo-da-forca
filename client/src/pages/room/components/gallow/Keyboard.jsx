/* eslint-disable react/no-array-index-key */
import PropTypes from 'prop-types';
import React from 'react';

const KEYS = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
];

function Keyboard({ correctLetters, wrongLetters, className }) {
  function getBgColor(key) {
    if (correctLetters.includes(key)) return 'bg-emerald-400';

    if (wrongLetters.includes(key)) return 'bg-red-400';

    return 'bg-gray-100';
  }

  return (
    <div className={`flex flex-col gap-1 w-full${className}`}>
      {KEYS.map((line, index) => (
        <div key={index} className="flex justify-center gap-1 sm:gap-1.5">
          {line.map((key) => (
            <button
              type="button"
              key={key}
              disabled={
                correctLetters.includes(key) || wrongLetters.includes(key)
              }
              className={`flex items-center justify-center
              w-[8.5%] max-w-[2.2rem] sm:max-w-[3rem] h-8 sm:h-10
              text-xl sm:text-2xl rounded outline-none shadow-sm shadow-black/50
              ${getBgColor(key)}`}
            >
              {key}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}

Keyboard.defaultProps = {
  correctLetters: [],
  wrongLetters: [],
  className: '',
};

Keyboard.propTypes = {
  correctLetters: PropTypes.arrayOf(PropTypes.string),
  wrongLetters: PropTypes.arrayOf(PropTypes.string),
  className: PropTypes.string,
};

export default Keyboard;
