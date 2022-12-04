import React, { useContext } from 'react';
import gc from '../../../../config/gameConstraints';
import { MatchContext } from '../../../../providers/MatchProvider';
import startGame from '../../../../socket/startGame';
import InTurnPlayerView from './InTurnPlayerView';
import NotInTurnPlayerView from './NotInTurnPlayerView';
import WaitingRoomView from './WaitingRoomView';
import WatchingPlayerView from './WatchingPlayerView';

function Match() {
  const { room, player: myPlayer } = useContext(MatchContext);

  if (room.round.state === gc.ROOM_MATCH_STATES.waiting) {
    return (
      <WaitingRoomView
        isOwner={room.owner === myPlayer.id}
        start={() => startGame(room.id)}
      />
    );
  }

  if (myPlayer.isWatching) {
    return <WatchingPlayerView players={room.players} />;
  }

  return (
    <div
      className="flex flex-col items-center justify-evenly gap-2 grow
      w-full p-0.5 overflow-hidden"
    >
      {myPlayer?.id === room.playerInTurn.id ? (
        <InTurnPlayerView roomId={room.id} theme={room.round.theme} />
      ) : (
        <NotInTurnPlayerView
          playerInTurnNick={room.playerInTurn.nick}
          theme={room.round.theme}
        />
      )}
    </div>
  );
}

export default Match;
