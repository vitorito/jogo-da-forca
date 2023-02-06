import React, { useContext } from 'react';
import { FaRegSadCry } from 'react-icons/fa';
import Timer from '../../../../components/Timer';
import { MatchContext } from '../../../../providers/MatchProvider';

function SkippedRound() {
  const { room } = useContext(MatchContext);
  return (
    <>
      <Timer
        endTime={room.round.stageEndTime}
        totalTime={room.round.stageDuration}
      />
      <div className="flex flex-col items-center justify-evenly grow">
        <p className="flex flex-col items-center gap-6 text-3xl sm:text-4xl">
          {room.playerInTurn.nick}
          <span className="text-xl sm:text-2xl">passou a vez</span>
        </p>
        <FaRegSadCry size={70} className='animate-bounce' />
      </div>
    </>
  );
}

export default SkippedRound;
