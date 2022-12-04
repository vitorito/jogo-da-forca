import React, { createContext, useMemo, useState } from 'react';

export const RoomContext = createContext(null);

// eslint-disable-next-line react/prop-types
function RoomProvider({ children }) {
  const [room, setRoom] = useState(null);

  const value = useMemo(
    () => ({
      room,
      setRoom,
    }),
    [room, setRoom]
  );
  return <RoomContext.Provider value={value}>{children}</RoomContext.Provider>;
}

export default RoomProvider;
