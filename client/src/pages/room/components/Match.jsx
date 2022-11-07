import React, { useContext, useMemo } from 'react';
import ScrollableContainer from '../../../components/ScrollableContainer';
import { MatchContext } from '../../../providers/MatchProvider';
import Gallow from './Gallow';
import Keyboard from './Keyboard';

function Match() {
  const { room } = useContext(MatchContext);
  const myPlayer = useMemo(
    () => room.players.find((player) => player.id === 1),
    [room]
  );
  const wordPickerId = room.round.playerInTurn.id;

  if (myPlayer?.id !== wordPickerId) {
    return (
      <div className="flex flex-col items-center justify-evenly gap-2 grow w-full">
        <p className='page-title'>{room.round.theme}</p>
        <Gallow />
        <ScrollableContainer className="shadow-none px-0">
          <Keyboard />
        </ScrollableContainer>
      </div>
    );
  }

  return (
    <div className="grow">
      {room.players.map((player) => (
        <Gallow key={player.id} player={player} />
      ))}
    </div>
  );
}

export default Match;
