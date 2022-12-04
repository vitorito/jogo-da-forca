import React, { createContext, useMemo, useState } from 'react';

export const MatchContext = createContext(null);

// eslint-disable-next-line react/prop-types
function MatchProvider({ children }) {
  const [room, setRoom] = useState(null);
  const [player, setPlayer] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const value = useMemo(
    () => ({
      room,
      setRoom,
      player,
      setPlayer,
      isLoading,
      setIsLoading,
    }),
    [room, setRoom]
  );
  return (
    <MatchContext.Provider value={value}>{children}</MatchContext.Provider>
  );
}

export default MatchProvider;
