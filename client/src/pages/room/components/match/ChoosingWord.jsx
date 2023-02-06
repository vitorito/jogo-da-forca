import React, { useContext } from 'react';
import Timer from '../../../../components/Timer';
import { MatchContext } from '../../../../providers/MatchProvider';
import InTurnChoosingWord from './InTurnChoosingWord';
import NotInTurnChoosingWord from './NotInTurnChoosingWord';

function ChoosingWord() {
  const { room, player } = useContext(MatchContext);
  return (
    <>
      <Timer
        endTime={room.round.stageEndTime}
        totalTime={room.round.stageDuration}
      />
      {player.id === room.playerInTurn.id ? (
        <InTurnChoosingWord roomId={room.id} theme={room.round.theme} />
      ) : (
        <NotInTurnChoosingWord />
      )}
    </>
  );
}

export default ChoosingWord;
