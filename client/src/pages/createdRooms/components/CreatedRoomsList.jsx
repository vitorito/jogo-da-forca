import PropTypes from 'prop-types';
import ScrollableContainer from '../../../components/ScrollableContainer';
import RoomThumb from './RoomThumb';

function CreatedRoomsList({ rooms, handleSelectRoom }) {
  return (
    <ScrollableContainer className="bg-yellow-600 px-4 border-2 border-black rounded-lg">
      <ul>
        {rooms.map((room) => (
          <RoomThumb
            key={room.id}
            room={room}
            handleSelectRoom={handleSelectRoom}
          />
        ))}
      </ul>
    </ScrollableContainer>
  );
}

CreatedRoomsList.propTypes = {
  rooms: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
    })
  ).isRequired,
  handleSelectRoom: PropTypes.func.isRequired,
};

export default CreatedRoomsList;
