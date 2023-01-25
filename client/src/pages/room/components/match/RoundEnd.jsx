import React, { useContext } from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';
import Timer from '../../../../components/Timer';
import { MatchContext } from '../../../../providers/MatchProvider';
import validateRoundWord from '../../../../socket/validateRoundWord';

function RoundEnd() {
  const { room, player,  } = useContext(MatchContext);

  return (
    <>
      <Timer
        endTime={room.round.stageEndTime}
        totalTime={room.round.stageDuration}
      />
      <div className="sm-container justify-evenly h-full">
        <span className="page-title block max-w-full break-words text-4xl sm:text-5xl">
          {room.round.theme}
        </span>
        <span className="flex items-center justify-center gap-2 flex-wrap">
          {room.round.word.split('').map((letter, index) => (
            <span
              key={index}
              className="text-4xl text-center px-2 border-b-2 border-b-black"
            >
              {letter}
            </span>
          ))}
        </span>
        {room.playerInTurn.id !== player.id && (
          <button
            type="button"
            onClick={() => validateRoundWord(room.id)}
            className={`btn flex items-center justify-center gap-2 transition-colors ${
              player.round.isValidRoundWord
                ? 'bg-green-600 hover:bg-green-700'
                : 'bg-red-600 hover:bg-red-700'
            }`}
          >
            {player.round.isValidRoundWord ? (
              <FaCheck size={24} />
            ) : (
              <FaTimes size={24} />
            )}
            Avaliar
          </button>
        )}
      </div>
    </>
  );
}

export default RoundEnd;
