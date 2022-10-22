import PropTypes from 'prop-types';
import RoomThumb from './RoomThumb';

function CreatedRoomsList({ rooms, idSelectedRoom, onSelectRoom }) {
  return (
    <div
      className="bg-yellow-600 h-full p-4 pt-1 mt-4 rounded-xl overflow-y-scroll
        shadow shadow-black border-2 border-gray-900"
    >
      <ul>
        {rooms.map((room) => (
          <li key={room.id}>
            <RoomThumb
              room={room}
              isOpen={room.id === idSelectedRoom}
              onSelectRoom={onSelectRoom}
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
  onSelectRoom: PropTypes.func.isRequired,
};

export default CreatedRoomsList;
