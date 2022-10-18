import PropTypes from 'prop-types';

function CreatedRoomsGrid({ rooms }) {
  return (
    <div className="bg-yellow-600 w-full h-full">
      <ul>
        {rooms.map((room) => (
          <li key={room.id}>{room.id}</li>
        ))}
      </ul>
    </div>
  );
}

CreatedRoomsGrid.propTypes = {
  rooms: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CreatedRoomsGrid;
