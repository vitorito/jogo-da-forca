import React, { createContext, useEffect, useMemo, useState } from 'react';
import socket from '../socket/socket';

export const MatchContext = createContext(null);

// eslint-disable-next-line react/prop-types
function MatchProvider({ children }) {
  const [room, setRoom] = useState(null);
  const [player, setPlayer] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    socket.on('room_update', (roomData) => {
      setPlayer((prev) => roomData.players.find((p) => p.id === prev.id));
      setRoom(roomData);
    });
  }, []);

  const value = useMemo(
    () => ({
      room,
      setRoom,
      player,
      setPlayer,
      isLoading,
      setIsLoading,
    }),
    [room, setRoom, player, setPlayer, isLoading, setIsLoading]
  );

  return (
    <MatchContext.Provider value={value}>{children}</MatchContext.Provider>
  );
}

export default MatchProvider;
