import React, { useContext } from 'react';
import ScrollableContainer from '../../../components/ScrollableContainer';
import { MatchContext } from '../../../providers/MatchProvider';

function RoomThemes() {
  const { room } = useContext(MatchContext);
  return (
    <ScrollableContainer className="bg-yellow-600 w-full max-w-xs sm:max-w-sm">
      <ul className='flex flex-wrap items-start gap-2 text-center overflow-auto'>
        {room?.themes.map((theme) => (
          <li key={theme} className="rounded-gray-bg w-fit px-2 py-0.5" >{theme}</li>
        ))}
      </ul>
    </ScrollableContainer>
  );
}

export default RoomThemes;
