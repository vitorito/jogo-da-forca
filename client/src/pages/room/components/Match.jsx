import React, { useContext, useMemo } from 'react';
import { MatchContext } from '../../../providers/MatchProvider';
import Gallow from './Gallow';

function Match() {
  const room = useContext(MatchContext);
  const myPlayer = useMemo(
    () => room?.players.find((player) => player.id === 1),
    [room]
  );
  const wordPickerId = 1;

  if (myPlayer?.id === wordPickerId) {
    return (
      <div className='flex items-center grow'>
        <Gallow />
      </div>
    );
  }

  return (
    <div className="grow">
      {room?.players.map((player) => (
        <Gallow key={player.id} player={player} />
      ))}
    </div>
  );
}

export default Match;
