import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoadingSpin from '../../components/LoadingSpin';
import { MatchContext } from '../../providers/MatchProvider';
import Header, { HEADER_BUTTONS } from './components/Header';
import Match from './components/match/Match';
import Ranking from './components/Ranking';
import RoomInfo from './components/RoomInfo';

function Room() {
  const [activeScreen, setActiveScreen] = useState(HEADER_BUTTONS.match);
  const { room, player, isLoading } = useContext(MatchContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!room || !player) {
      navigate('/');
    }
  }, [room, player]);

  return (
    <div className="flex flex-col items-center gap-4 w-full h-full">
      <Header activeScreen={activeScreen} setActiveScreen={setActiveScreen} />
      {isLoading || !room || !player ? (
        <LoadingSpin />
      ) : (
        <>
          {activeScreen === HEADER_BUTTONS.ranking && (
            <Ranking players={room.players} />
          )}
          {activeScreen === HEADER_BUTTONS.info && <RoomInfo />}
          {activeScreen === HEADER_BUTTONS.match && <Match room={room} />}
        </>
      )}
    </div>
  );
}

export default Room;
