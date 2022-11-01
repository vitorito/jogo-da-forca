import { useContext } from 'react';
import ScrollableContainer from '../../../components/ScrollableContainer';
import { SelectRoomContext } from '../../../providers/SelectRoomProvider';
import RoomThumb from './RoomThumb';

function CreatedRoomsList() {
  const { rooms } = useContext(SelectRoomContext);

  return (
    // <Container className="overflow-y-scroll pt-1">
    <ScrollableContainer className="bg-yellow-600 px-4 border-2 border-black rounded-lg">
      <ul>
        {rooms.map((room) => (
          <RoomThumb key={room.id} room={room} />
        ))}
      </ul>
    </ScrollableContainer>
    // </Container>
  );
}

export default CreatedRoomsList;
