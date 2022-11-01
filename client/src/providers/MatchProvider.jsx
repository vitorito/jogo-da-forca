import React, { createContext, useState } from 'react';
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
    return roomData;
  }

  return <MatchContext.Provider value={room}>{children}</MatchContext.Provider>;
}

export default MatchProvider;
