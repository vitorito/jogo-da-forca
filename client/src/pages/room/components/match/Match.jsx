import React, { useContext } from 'react';
import ScrollableContainer from '../../../../components/ScrollableContainer';
import gc from '../../../../config/gameConstraints';
import { MatchContext } from '../../../../providers/MatchProvider';
import startGame from '../../../../socket/startGame';
import Gallow from '../gallow/Gallow';
import Keyboard from '../gallow/Keyboard';
import InTurnChoosingWordView from './InTurnChoosingWordView';
import NotInTurnChoosingWordView from './NotInTurnChoosingWordView';
import WaitingRoomView from './WaitingRoomView';
import WatchingPlayerView from './WatchingPlayerView';

function Match() {
  const { room, player } = useContext(MatchContext);

  if (room.round.state === gc.ROOM_MATCH_STATES.waiting) {
    return (
      <WaitingRoomView
        isOwner={room.owner === player.id}
        start={() => startGame(room.id)}
      />
    );
  }

  if (room.round.state === gc.ROOM_MATCH_STATES.choosingWord) {
    return player.id === room.playerInTurn.id ? (
      <InTurnChoosingWordView roomId={room.id} theme={room.round.theme} />
    ) : (
      <NotInTurnChoosingWordView />
    );
  }

  return (
    <div
      className="flex flex-col items-center justify-evenly gap-2 grow
      w-full p-0.5 overflow-hidden"
    >
      {player.isWatching ? (
        <WatchingPlayerView />
      ) : (
        <>
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

export default Match;
