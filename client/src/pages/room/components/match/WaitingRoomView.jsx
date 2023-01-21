import React, { useContext, useEffect, useState } from 'react';
import gc from '../../../../config/gameConstraints';
import { MatchContext } from '../../../../providers/MatchProvider';
import startGame from '../../../../socket/startGame';
import AnimatedText from '../gallow/AnimatedText';
import Gallow from '../gallow/Gallow';

const playersStates = [
  {
    round: {
      word: '**********',
      errors: 0,
    },
  },
  {
    round: {
      word: 'a**a**a***',
      errors: 0,
    },
  },
  {
    round: {
      word: 'a**a**a***',
      errors: 1,
    },
  },
  {
    round: {
      word: 'a**a**a***',
      errors: 2,
    },
  },
  {
    round: {
      word: 'ag*a**a***',
      errors: 2,
    },
  },
  {
    round: {
      word: 'ag*a**a**o',
      errors: 2,
    },
  },
  {
    round: {
      word: 'ag*a**a**o',
      errors: 3,
    },
  },
  {
    round: {
      word: 'ag*a*da*do',
      errors: 3,
    },
  },
  {
    round: {
      word: 'ag*a*da*do',
      errors: 4,
    },
  },
  {
    round: {
      word: 'agua*da*do',
      errors: 4,
    },
  },
  {
    round: {
      word: 'agua*da*do',
      errors: 5,
    },
  },
  {
    round: {
      word: 'aguarda*do',
      errors: 5,
    },
  },
  {
    round: {
      word: 'aguardando',
      errors: 6,
    },
  },
  {
    round: {
      word: 'aguardando',
      errors: 6,
    },
  },
];

function WaitingRoomView() {
  const { room, player } = useContext(MatchContext);
  const [playerState, setPlayerState] = useState(0);

  function updateGallow() {
    setPlayerState((prev) => (prev + 1) % playersStates.length);
  }

  useEffect(() => {
    const intervalId = setInterval(updateGallow, 400);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="sm-container justify-evenly items-center grow mt-6">
      <AnimatedText text="Aguardando Jogadores..." />
      <Gallow player={playersStates[playerState]} className="w-[105%]" />
      {room.owner === player.id && (
        <span>Min. de jogadores: {gc.MIN_ROOM_PLAYERS}</span>
      )}
      <button
        type="button"
        onClick={() => startGame(room.id)}
        disabled={room.players.length < gc.MIN_ROOM_PLAYERS}
        className={room.owner === player.id ? 'btn' : 'hidden'}
      >
        Iniciar Partida
      </button>
    </div>
  );
}

export default WaitingRoomView;
