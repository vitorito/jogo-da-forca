import PropTypes from 'prop-types';
import React, { useMemo } from 'react';
import ScrollableContainer from '../../../components/ScrollableContainer';
import RankingItem from './RankingItem';

function Ranking({ players }) {
  const sortedPlayers = useMemo(
    () => [...players].sort((p1, p2) => p2.points - p1.points),
    [players]
  );
  return (
    <ScrollableContainer className="sm-container bg-yellow-700">
      <ul className="flex flex-col gap-2 w-full h-full overflow-auto">
        {sortedPlayers.map((player, index) => (
          <RankingItem key={player.id} player={player} position={index + 1} />
        ))}
      </ul>
    </ScrollableContainer>
  );
}

Ranking.propTypes = {
  players: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      nick: PropTypes.string,
      points: PropTypes.number,
    })
  ).isRequired,
};

export default Ranking;
