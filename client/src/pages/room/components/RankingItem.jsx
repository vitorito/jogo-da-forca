import PropTypes from 'prop-types';
import React from 'react';

function RankingItem({ player, position }) {
  function getMedalStyle() {
    if (position === 1) return 'bg-yellow-400 border-transparent';
    if (position === 2) return 'bg-gray-300 border-transparent';
    if (position === 3) return 'bg-yellow-700 border-transparent';

    return 'border-black';
  }

  return (
    <li className="bg-yellow-600 flex items-center w-full px-4 py-2 rounded text-lg">
      <span
        className={`w-8 min-w-[2rem] text-center rounded-[50%] border ${getMedalStyle()}`}
      >
        {position}
      </span>
      <span className="px-1 grow text-center whitespace-nowrap overflow-scroll">
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
