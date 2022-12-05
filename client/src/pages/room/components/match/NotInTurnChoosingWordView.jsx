import React, { useContext } from 'react';
import { MatchContext } from '../../../../providers/MatchProvider';
import Gallow from '../gallow/Gallow';

function NotInTurnChoosingWordView() {
  const { player, room } = useContext(MatchContext);
  // const { correctLetters, wrongLetters } = player.round;

  return (
    <div
      className="flex flex-col items-center justify-evenly gap-2 grow
      w-full p-0.5 overflow-hidden"
    >
      <p className="page-title">{room.round.theme}</p>
      <Gallow player={player} className="grow-0 animate-pulse" />
      {/* {player.round.word ? (
        <ScrollableContainer className="shadow-none px-0">
          <Keyboard
            correctLetters={correctLetters}
            wrongLetters={wrongLetters}
          />
        </ScrollableContainer>
      ) : ( */}
      <span className="max-w-full">
        <span className="block w-full text-3xl font-mono text-center break-words">
          {room.playerInTurn.nick}
        </span>
        <span className="block text-center mt-2 text-lg sm:text-xl animate-bounce">
          está escolhendo a palavra...
        </span>
      </span>
    </div>
  );
}

export default NotInTurnChoosingWordView;
