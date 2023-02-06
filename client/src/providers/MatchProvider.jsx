import React, { createContext, useEffect, useMemo, useState } from 'react';
import socket from '../socket/socket';

export const MatchContext = createContext(null);

const EMPTY_MATCH = {
  room: null,
  player: null,
};

// eslint-disable-next-line react/prop-types
function MatchProvider({ children }) {
  const [match, setMatch] = useState(EMPTY_MATCH);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    socket.on('room_update', (room) => {
      setMatch(({ player }) => ({
        room,
        player: room.players.find((p) => p.id === player.id),
      }));
    });
  }, []);

  const value = useMemo(
    () => ({
      room: match.room,
      player: match.player,
      setMatch,
      isLoading,
      setIsLoading,
    }),
    [match, setMatch, isLoading, setIsLoading]
  );

  return (
    <MatchContext.Provider value={value}>{children}</MatchContext.Provider>
  );
}

export default MatchProvider;
