import React, { useContext } from 'react';
import Timer from '../../../../components/Timer';
import { MatchContext } from '../../../../providers/MatchProvider';
import InTurnChoosingWordView from './InTurnChoosingWordView';
import NotInTurnChoosingWordView from './NotInTurnChoosingWordView';

function ChoosingWordView() {
  const { room, player } = useContext(MatchContext);
  return (
    <>
      <Timer
        endTime={room.round.stageEndTime}
        totalTime={room.round.stageDuration}
      />
      {player.id === room.playerInTurn.id ? (
        <InTurnChoosingWordView roomId={room.id} theme={room.round.theme} />
      ) : (
        <NotInTurnChoosingWordView />
      )}
    </>
  );
}

export default ChoosingWordView;
