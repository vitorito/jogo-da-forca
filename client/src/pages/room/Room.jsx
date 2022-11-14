import { useState } from 'react';
import { useParams } from 'react-router-dom';
import LoadingSpin from '../../components/LoadingSpin';
import useRoom from '../../hooks/useRoom';
import Header, { HEADER_BUTTONS } from './components/Header';
import Match from './components/Match';
import Ranking from './components/Ranking';
import RoomInfo from './components/RoomInfo';

function Room() {
  const [activeScreen, setActiveScreen] = useState(HEADER_BUTTONS.match);
  const roomId = useParams().id;
  const { data: room, isLoading } = useRoom(roomId);

  return (
    <div className="flex flex-col items-center gap-4 w-full h-full">
      <Header activeScreen={activeScreen} setActiveScreen={setActiveScreen} />
      {isLoading ? (
        <LoadingSpin />
      ) : (
        <>
          {activeScreen === HEADER_BUTTONS.ranking && (
            <Ranking players={room.players} />
          )}
          {activeScreen === HEADER_BUTTONS.info && <RoomInfo room={room} />}
          {activeScreen === HEADER_BUTTONS.match && <Match room={room} />}
        </>
      )}
    </div>
  );
}

export default Room;
