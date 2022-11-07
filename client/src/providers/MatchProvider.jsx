import React, { createContext, useMemo, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import useRoom from '../hooks/useRoom';

export const MatchContext = createContext(null);

// eslint-disable-next-line react/prop-types
function MatchProvider({ children }) {
  const location = useLocation();
  const roomId = useParams().id;
  const [room, setRoom] = useState(loadRoom);

  function loadRoom() {
    const roomData = location.state?.room;
    if (!roomData) {
      useRoom(roomId).then((data) => setRoom(data));
    }
    return roomData || getEmptyRoomData();
  }

  const value = useMemo(
    () => ({
      room,
      setRoom,
    }),
    [room, setRoom]
  );

  return <MatchContext.Provider value={value}>{children}</MatchContext.Provider>;
}

function getEmptyRoomData(roomId) {
  return {
    id: roomId,
    isPrivate: false,
    currentRound: 0,
    totalRounds: 0,
    speed: '',
    themes: [],
    players: [],
    round: {
      playerInTurn: {
        id: 0,
        nick: '',
      },
      state: {
        word: '',
        correctLetters: [],
        wrongLetters: [],
      },
    },
  };
}

export default MatchProvider;
