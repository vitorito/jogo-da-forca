import React, { useContext } from 'react';
import ScrollableContainer from '../../../components/ScrollableContainer';
import { MatchContext } from '../../../providers/MatchProvider';
import RankingItem from './RankingItem';

function Ranking() {
  const { room } = useContext(MatchContext);
  return (
    <ScrollableContainer className="sm-container bg-yellow-700">
      <ul className="flex flex-col gap-2 w-full h-full overflow-auto">
        {room?.players.map((player, index) => (
          <RankingItem key={player.id} player={player} position={index + 1} />
        ))}
      </ul>
    </ScrollableContainer>
  );
}

export default Ranking;
