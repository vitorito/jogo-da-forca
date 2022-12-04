import PropTypes from 'prop-types';
import React, { useMemo } from 'react';
import gc from '../../../../config/gameConstraints';
import startGame from '../../../../socket/startGame';
import InTurnPlayerView from './InTurnPlayerView';
import NotInTurnPlayerView from './NotInTurnPlayerView';
import WaitingRoomView from './WaitingRoomView';
import WatchingPlayerView from './WatchingPlayerView';

function Match({ room }) {
  const myPlayer = useMemo(
    () => room.players[room.players.length - 1],
    [room]
  );

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
          player={myPlayer}
          playerInTurnNick={room.playerInTurn.nick}
          theme={room.round.theme}
        />
      )}
    </div>
  );
}

Match.propTypes = {
  room: PropTypes.shape({
    id: PropTypes.string.isRequired,
    owner: PropTypes.string.isRequired,
    playerInTurn: PropTypes.shape({
      id: PropTypes.string,
      nick: PropTypes.string,
    }).isRequired,
    round: PropTypes.shape({
      theme: PropTypes.string,
      state: PropTypes.oneOf(Object.values(gc.ROOM_MATCH_STATES)),
    }),
    players: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        nick: PropTypes.string,
        points: PropTypes.number,
        isWatching: PropTypes.bool,
        round: PropTypes.shape({
          word: PropTypes.string,
          errors: PropTypes.number,
          correctLetters: PropTypes.arrayOf(PropTypes.string),
          wrongLetters: PropTypes.arrayOf(PropTypes.string),
        }),
      })
    ),
  }).isRequired,
};

export default Match;
