import { useState } from 'react';
import MainContainer from '../../components/MainContainer';
import Header, { HEADER_BUTTONS } from './components/Header';

function Room() {
  const [activeScreen, setActiveScreen] = useState(HEADER_BUTTONS.match);

  return (
    <MainContainer>
      <Header activeScreen={activeScreen} setActiveScreen={setActiveScreen} />
    </MainContainer>
  );
}

export default Room;
