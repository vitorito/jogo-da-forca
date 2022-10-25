import { useContext } from 'react';
import { SelectRoomContext } from '../../../providers/SelectRoomProvider';
import Container from './Container';
import RoomThumb from './RoomThumb';

function CreatedRoomsList() {
  const { rooms } = useContext(SelectRoomContext);

  return (
    <Container className="overflow-y-scroll pt-1">
      <ul>
        {rooms.map((room) => (
          <li key={room.id}>
            <RoomThumb room={room} />
          </li>
        ))}
      </ul>
    </Container>
  );
}

export default CreatedRoomsList;
