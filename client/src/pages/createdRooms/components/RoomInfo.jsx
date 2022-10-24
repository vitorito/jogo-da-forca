import { useContext } from 'react';
import { FaLock } from 'react-icons/fa';
import { SelectRoomContext } from '../../../providers/SelectRoomProvider';

import Container from './Container';
import RoomDetails from './RoomDetails';
import RoomPassword from './RoomPassword';
import RoomThemes from './RoomThemes';

function RoomInfo() {
  const { selectedRoom: room } = useContext(SelectRoomContext);

  return (
    <Container className="flex flex-col p-6 justify-between gap-4 pb-10">
      <div className="rounded-gray-bg flex items-center justify-center gap-2 w-fit px-5 m-auto">
        {room.isPrivate && <FaLock />}
        <span>Sala {room.id}</span>
      </div>
      <RoomDetails />
      <div className="flex flex-col px-2 grow">
        <span className="rounded-gray-bg px-2 w-fit mx-auto mb-2">
          {room.themes.length} Temas
        </span>
        <RoomThemes themes={room.themes} />
      </div>
      {room.isPrivate && <RoomPassword />}
    </Container>
  );
}

export default RoomInfo;
