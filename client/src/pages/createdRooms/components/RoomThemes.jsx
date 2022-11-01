import { useContext } from 'react';
import ScrollableContainer from '../../../components/ScrollableContainer';
import { SelectRoomContext } from '../../../providers/SelectRoomProvider';

function RoomThemes() {
  const { selectedRoom: room } = useContext(SelectRoomContext);

  return (
    <ScrollableContainer className="bg-yellow-700 mb-1">
      <ul className="flex flex-wrap content-start gap-2 h-full py-2 text-base">
        {room.themes.map((theme) => (
          <li key={theme} className="rounded-gray-bg w-fit px-2 py-0.5">
            {theme}
          </li>
        ))}
      </ul>
    </ScrollableContainer>
  );
}

export default RoomThemes;
