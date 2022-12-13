import React, { useContext, useMemo } from 'react';
import ScrollableContainer from '../../../components/ScrollableContainer';
import { MatchContext } from '../../../providers/MatchProvider';
import RankingItem from './RankingItem';

function Ranking() {
  const { room } = useContext(MatchContext);

  const sortedPlayers = useMemo(
    () => [...room.players].sort((p1, p2) => p2.score - p1.score),
    [room]
  );

  return (
    <ScrollableContainer className="sm-container bg-yellow-700 max-h-[700px]">
      <ul className="flex flex-col gap-2 w-full h-full overflow-auto">
        {sortedPlayers.map((player, index) => (
          <RankingItem key={player.id} player={player} position={index + 1} />
        ))}
      </ul>
    </ScrollableContainer>
  );
}

export default Ranking;
