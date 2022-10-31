import React, { createContext, useMemo, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import useRoom from '../hooks/useRoom';

export const MatchContext = createContext(null);

// eslint-disable-next-line react/prop-types
function MatchProvider({ children }) {
  const location = useLocation();
  const roomId = useParams().id;
  const [roomData, setRoomData] = useState(loadRoom);

  const value = useMemo(
    () => ({
      room: roomData,
    }),
    [roomId, location, loadRoom]
  );

  function loadRoom() {
    const room = location.state?.room;
    if (!room) {
      useRoom(roomId).then((data) => setRoomData(data));
    }
    return room;
  }

  return (
    <MatchContext.Provider value={value}>{children}</MatchContext.Provider>
  );
}

export default MatchProvider;
