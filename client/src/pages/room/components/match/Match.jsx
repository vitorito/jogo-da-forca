import React, { useContext } from 'react';
import gc from '../../../../config/gameConstraints';
import { MatchContext } from '../../../../providers/MatchProvider';
import ChoosingWordView from './ChoosingWordView';
import FinishedMatchView from './FinishedMatchView';
import RunningMatchView from './RunningMatchView';
import WaitingRoomView from './WaitingRoomView';

function Match() {
  const { room } = useContext(MatchContext);

  if (room.round.state === gc.ROOM_MATCH_STATES.waiting) {
    return <WaitingRoomView />;
  }

  if (room.round.state === gc.ROOM_MATCH_STATES.choosingWord) {
    return <ChoosingWordView />;
  }

  if (room.round.state === gc.ROOM_MATCH_STATES.finished) {
    return <FinishedMatchView />;
  }

  return <RunningMatchView />;
}

export default Match;
