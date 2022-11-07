/* eslint-disable react/no-array-index-key */
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import useGuessLetter from '../../../hooks/useGuessLetter';
import { MatchContext } from '../../../providers/MatchProvider';

const KEYS = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
];

function Keyboard({ className }) {
  const { room } = useContext(MatchContext);
  const { correctLetters, wrongLetters } = room.round.state;
  const guess = useGuessLetter();

  function getBgColor(key) {
    if (correctLetters.includes(key)) return 'bg-emerald-400';

    if (wrongLetters.includes(key)) return 'bg-red-400';

    return 'bg-gray-100';
  }

  return (
    <div className={`flex flex-col gap-1 w-full${className}`}>
      {KEYS.map((line, index) => (
        <div
          key={index}
          className="flex justify-center gap-1 text-xl"
        >
          {line.map((key) => (
            <button
              type="button"
              key={key}
              onClick={() => guess(key)}
              disabled={
                correctLetters.includes(key) || wrongLetters.includes(key)
              }
              className={`flex items-center justify-center w-[8.5%] max-w-[2.2rem] h-8 rounded outline-none
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
  className: '',
};

Keyboard.propTypes = {
  className: PropTypes.string,
};

export default Keyboard;
