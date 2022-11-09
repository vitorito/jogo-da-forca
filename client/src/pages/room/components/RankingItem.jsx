import PropTypes from 'prop-types';
import React from 'react';

const medalStyles = {
  1: 'bg-yellow-400 border-transparent',
  2: 'bg-gray-300 border-transparent',
  3: 'bg-yellow-700 border-transparent',
};

function RankingItem({ player, position }) {
  function getMedalStyle() {
    return medalStyles[position] || 'border-black';
  }

  return (
    <li
      className="bg-yellow-600 flex items-center grow
      w-full px-4 rounded text-lg"
    >
      <span
        className={`w-8 min-w-[2rem] text-center rounded-[50%] border ${getMedalStyle()}`}
      >
        {position}
      </span>
      <span className="px-1 grow text-center whitespace-nowrap overflow-auto">
        {player.nick}
      </span>
      <span className="w-6 min-w-[1.5rem] text-right">{player.points}</span>
    </li>
  );
}

RankingItem.propTypes = {
  player: PropTypes.shape({
    nick: PropTypes.string.isRequired,
    points: PropTypes.number.isRequired,
  }).isRequired,
  position: PropTypes.number.isRequired,
};

export default RankingItem;
