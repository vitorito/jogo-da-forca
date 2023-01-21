import React, { useContext } from 'react';
import gc from '../../../../config/gameConstraints';
import { MatchContext } from '../../../../providers/MatchProvider';
import ChoosingWord from './ChoosingWord';
import FinishedMatch from './FinishedMatch';
import RunningMatch from './RunningMatch';
import SkippedRound from './SkippedRound';
import WaitingRoom from './WaitingRoom';

function Match() {
  const { room } = useContext(MatchContext);

  if (room.round.state === gc.ROOM_MATCH_STATES.waiting) {
    return <WaitingRoom />;
  }

  if (room.round.state === gc.ROOM_MATCH_STATES.choosingWord) {
    return <ChoosingWord />;
  }

  if (room.round.state === gc.ROOM_MATCH_STATES.skippedRound) {
    return <SkippedRound />;
  }

  if (room.round.state === gc.ROOM_MATCH_STATES.finished) {
    return <FinishedMatch />;
  }

  return <RunningMatch />;
}

export default Match;
