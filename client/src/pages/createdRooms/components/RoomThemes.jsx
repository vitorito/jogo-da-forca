import { useContext } from 'react';
import { SelectRoomContext } from '../../../providers/SelectRoomProvider';

function RoomThemes() {
  const { selectedRoom: room } = useContext(SelectRoomContext);

  return (
    <div
      className="bg-yellow-700 flex flex-wrap content-start justify-center grow
      gap-2 p-2 text-base sm:text-lg  overflow-auto rounded-lg"
    >
      {room.themes.map((theme) => (
        <span
          key={theme}
          className="rounded-gray-bg flex items-center text-center px-2 py-0.5"
        >
          {theme}
        </span>
      ))}
    </div>
  );
}

export default RoomThemes;
