import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import AnimatedText from './AnimatedText';
import Gallow from './Gallow';

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

function WaitingRoomView({ isPlayerInTurn }) {
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
      <button type="button" className={isPlayerInTurn ? 'btn' : 'hidden'}>
        Iniciar Partida
      </button>
    </div>
  );
}

WaitingRoomView.defaultProps = {
  isPlayerInTurn: false,
};

WaitingRoomView.propTypes = {
  isPlayerInTurn: PropTypes.bool,
};

export default WaitingRoomView;
