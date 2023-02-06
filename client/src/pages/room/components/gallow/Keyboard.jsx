/* eslint-disable react/no-array-index-key */
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import gc from '../../../../config/gameConstraints';
import { MatchContext } from '../../../../providers/MatchProvider';
import guessLetter from '../../../../socket/guessLetter';

const KEYS = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
];

function Keyboard({ className }) {
  const { player, room } = useContext(MatchContext);
  const { round } = player;

  function getKeyColor(key) {
    if (isCorrectLetter(key)) return 'bg-emerald-400';

    if (isWrongLetter(key)) return 'bg-red-400';

    if (isRoundOver()) return 'bg-slate-300';

    return 'bg-gray-100';
  }

  function getKeyDisabled(key) {
    return isCorrectLetter(key) || isWrongLetter(key) || isRoundOver();
  }

  function isRoundOver() {
    return (
      !round.word.includes(gc.HIDDEN_LETTER) ||
      round.errors >= gc.MAX_PLAYER_ROUND_ERRORS
    );
  }

  function isCorrectLetter(letter) {
    return round.correctLetters.includes(letter);
  }

  function isWrongLetter(letter) {
    return round.wrongLetters.includes(letter);
  }

  return (
    <div className={`flex flex-col gap-1 w-full ${className}`}>
      {KEYS.map((line, index) => (
        <div key={index} className="flex justify-center gap-1 sm:gap-1.5">
          {line.map((key) => (
            <button
              type="button"
              key={key}
              onClick={() => guessLetter(room.id, key)}
              disabled={getKeyDisabled(key)}
              className={`flex items-center justify-center
              w-[8.5%] max-w-[2.2rem] sm:max-w-[3rem] h-8 sm:h-10
              text-xl sm:text-2xl rounded outline-none shadow-sm shadow-black/50
              ${getKeyColor(key)}`}
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
