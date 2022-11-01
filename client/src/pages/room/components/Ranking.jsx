import React, { useContext } from 'react';
import { MatchContext } from '../../../providers/MatchProvider';
import RankingItem from './RankingItem';

function Ranking() {
  const room = useContext(MatchContext);
  return (
    <div className="sm-container bg-yellow-700 justify-center grow rounded overflow-auto px-2 shadow shadow-black">
      <div className="max-h-[96%]">
        <ul className="flex flex-col gap-2 w-full h-full overflow-auto">
          {room?.players.map((player, index) => (
            <RankingItem key={player.id} player={player} position={index + 1} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Ranking;
