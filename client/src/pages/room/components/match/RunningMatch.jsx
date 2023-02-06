import React, { useContext } from 'react';
import ScrollableContainer from '../../../../components/ScrollableContainer';
import Timer from '../../../../components/Timer';
import { MatchContext } from '../../../../providers/MatchProvider';
import Gallow from '../gallow/Gallow';
import Keyboard from '../gallow/Keyboard';
import WatchingPlayer from './WatchingPlayer';

function RunningMatch() {
  const { room, player } = useContext(MatchContext);

  return (
    <div
      className="flex flex-col items-center justify-evenly
      gap-2 grow w-full p-0.5 overflow-hidden"
    >
      {player.isWatching ? (
        <WatchingPlayer />
      ) : (
        <>
          <Timer
            endTime={room.round.stageEndTime}
            totalTime={room.round.stageDuration}
          />
          <p className="page-title">{room.round.theme}</p>
          <Gallow player={player} />
          <ScrollableContainer className="shadow-none px-0">
            <Keyboard />
          </ScrollableContainer>
        </>
      )}
    </div>
  );
}

export default RunningMatch;
