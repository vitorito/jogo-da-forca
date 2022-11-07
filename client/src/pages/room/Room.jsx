import { useState } from 'react';
import Header, { HEADER_BUTTONS } from './components/Header';
import Match from './components/Match';
import Ranking from './components/Ranking';
import RoomInfo from './components/RoomInfo';

function Room() {
  const [activeScreen, setActiveScreen] = useState(HEADER_BUTTONS.match);

  return (
    <div className="flex flex-col items-center gap-4 w-full h-full">
      <Header activeScreen={activeScreen} setActiveScreen={setActiveScreen} />
      {activeScreen === HEADER_BUTTONS.ranking ? <Ranking /> : null}
      {activeScreen === HEADER_BUTTONS.info ? <RoomInfo /> : null}
      {activeScreen === HEADER_BUTTONS.match ? <Match /> : null}
    </div>
  );
}

export default Room;
