import { useState } from 'react';
import Header, { HEADER_BUTTONS } from './components/Header';

function Room() {
  const [activeScreen, setActiveScreen] = useState(HEADER_BUTTONS.match);

  return (
    <div className="main-container">
      <Header activeScreen={activeScreen} setActiveScreen={setActiveScreen} />
    </div>
  );
}

export default Room;
