import React, { useContext } from 'react';
import ScrollableContainer from '../../../components/ScrollableContainer';
import { MatchContext } from '../../../providers/MatchProvider';

function RoomThemes() {
  const room = useContext(MatchContext);
  return (
    <ScrollableContainer className="bg-yellow-600 max-h-[30%] sm:max-h-[40%]">
      <ul className='flex flex-wrap items-start gap-2 text-center h-full overflow-auto'>
        {room?.themes.map((theme) => (
          <li key={theme} className="rounded-gray-bg w-fit px-2 py-0.5" >{theme}</li>
        ))}
      </ul>
    </ScrollableContainer>
  );
}

export default RoomThemes;
