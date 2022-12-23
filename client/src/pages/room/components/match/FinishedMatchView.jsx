import { Fireworks } from '@fireworks-js/react';
import React, { useContext } from 'react';
import { MatchContext } from '../../../../providers/MatchProvider';
import AnimatedText from '../gallow/AnimatedText';
import Trophy from './Trophy';

function FinishedMatchView() {
  const { room } = useContext(MatchContext);
  const winner = findWinner();

  function findWinner() {
    const sortedPlayers = [...room.players].sort(
      (p1, p2) => p2.score - p1.score
    );
    return sortedPlayers[0];
  }

  return (
    <>
      <div className="flex flex-col items-center justify-around sm-container h-full w-full z-10">
        <span className="text-3xl text-white">Vencedor</span>
        <Trophy />
        <AnimatedText text={winner.nick} />
        <span
          className="bg-yellow-700 flex flex-col items-center justify-center
        p-4 text-white font-medium rounded-full aspect-square"
        >
          <span className="text-2xl sm:text-4xl">{winner.score}</span>
          <span className="sm:text-lg">pontos</span>
        </span>
        <button type="button" className="btn">
          Recomeçar
        </button>
      </div>
      <Fireworks
        className="w-full h-4/5 self-center absolute bottom-0 left-0"
        options={{
          delay: {
            min: 80,
            max: 100,
          },
        }}
      />
    </>
  );
}

export default FinishedMatchView;
