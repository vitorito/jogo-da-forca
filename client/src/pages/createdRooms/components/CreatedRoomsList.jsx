import { useContext } from 'react';
import ScrollableContainer from '../../../components/ScrollableContainer';
import { SelectRoomContext } from '../../../providers/SelectRoomProvider';
import RoomThumb from './RoomThumb';

function CreatedRoomsList() {
  const { rooms } = useContext(SelectRoomContext);

  return (
    <ScrollableContainer className="bg-yellow-600 px-4 border-2 border-black rounded-lg">
      <ul>
        {rooms.map((room) => (
          <RoomThumb key={room.id} room={room} />
        ))}
      </ul>
    </ScrollableContainer>
  );
}

export default CreatedRoomsList;
