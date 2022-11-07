import React, { useContext, useMemo } from 'react';
import ScrollableContainer from '../../../components/ScrollableContainer';
import { MatchContext } from '../../../providers/MatchProvider';
import RankingItem from './RankingItem';

function Ranking() {
  const { room } = useContext(MatchContext);
  const players = useMemo(
    () => [...room.players].sort((p1, p2) => p2.points - p1.points),
    [room]
  );
  return (
    <ScrollableContainer className="sm-container bg-yellow-700">
      <ul className="flex flex-col gap-2 w-full h-full overflow-auto">
        {players.map((player, index) => (
          <RankingItem key={player.id} player={player} position={index + 1} />
        ))}
      </ul>
    </ScrollableContainer>
  );
}

export default Ranking;
