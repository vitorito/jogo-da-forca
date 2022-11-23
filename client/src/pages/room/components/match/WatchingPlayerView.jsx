import PropTypes from 'prop-types';
import React from 'react';
import ScrollableContainer from '../../../../components/ScrollableContainer';
import Gallow from '../gallow/Gallow';

function WatchingPlayerView({ players }) {
  return (
    <ScrollableContainer className="lg:max-w-[90%] rounded-xl">
      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-2 rounded-xl">
        {players.map((player) => (
          <li
            key={player.id}
            className="bg-yellow-600/40 flex flex-col rounded shadow-sm shadow-black"
          >
            <div className="rounded-gray-bg w-fit h-fit max-w-[80%] px-6 py-0.5 mx-auto mt-4">
              <p className="text-xl text-center overflow-auto overflow-ellipsis">
                {player.nick}
              </p>
            </div>
            <Gallow player={player} className="gap-5 scale-75 -mt-7" />
          </li>
        ))}
      </ul>
    </ScrollableContainer>
  );
}

WatchingPlayerView.propTypes = {
  players: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      nick: PropTypes.string,
    })
  ).isRequired,
};

export default WatchingPlayerView;