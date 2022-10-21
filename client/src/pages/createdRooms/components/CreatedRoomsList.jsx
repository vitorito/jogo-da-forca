import PropTypes from 'prop-types';
import RoomThumb from './RoomThumb';

function CreatedRoomsList({ rooms, idSelectedRoom, handleSelectRoom }) {
  return (
    <div className="bg-yellow-600 w-full h-full p-2 overflow-auto">
      <ul>
        {rooms.map((room) => (
          <li key={room.id}>
            <RoomThumb
              room={room}
              isOpen={room.id === idSelectedRoom}
              onClick={() => handleSelectRoom(room.id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

CreatedRoomsList.propTypes = {
  rooms: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      players: PropTypes.number.isRequired,
      isPrivate: PropTypes.bool.isRequired,
    })
  ).isRequired,
  idSelectedRoom: PropTypes.string.isRequired,
  handleSelectRoom: PropTypes.func.isRequired,
};

export default CreatedRoomsList;
