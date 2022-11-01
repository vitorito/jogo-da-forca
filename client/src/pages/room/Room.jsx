import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header, { HEADER_BUTTONS } from './components/Header';
import Ranking from './components/Ranking';

function Room() {
  const [activeScreen, setActiveScreen] = useState(HEADER_BUTTONS.ranking);

  return (
    <div className="flex flex-col items-center justify-between gap-4 w-full h-full">
      <Header activeScreen={activeScreen} setActiveScreen={setActiveScreen} />
      {activeScreen === HEADER_BUTTONS.ranking ? (
        <Ranking />
      ) : (
        <Link to="/" className="btn block w-full">
          Voltar
        </Link>
      )}
    </div>
  );
}

export default Room;
