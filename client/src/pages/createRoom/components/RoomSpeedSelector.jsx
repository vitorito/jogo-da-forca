import PropTypes from 'prop-types';

function RoomSpeedSelector({ roomData, setRoomData }) {
  function handleSelectSpeed(speed) {
    setRoomData((prev) => ({
      ...prev,
      speed,
    }));
  }

  return (
    <div className='my-2'>
      <p>Tempo</p>
      <div className="flex">
        <button
          type="button"
          onClick={() => handleSelectSpeed('lazy')}
          className={`btn text-base sm:text-lg sm:p-2 rounded-r-none ${
            roomData.speed === 'lazy' ? 'selected' : ''
          }`}
        >
          Lento
        </button>
        <button
          type="button"
          onClick={() => handleSelectSpeed('medium')}
          className={`btn text-base sm:text-lg sm:p-2 rounded-none ${
            roomData.speed === 'medium' ? 'selected' : ''
          }`}
        >
          Médio
        </button>
        <button
          type="button"
          onClick={() => handleSelectSpeed('fast')}
          className={`btn text-base sm:text-lg sm:p-2 rounded-l-none ${
            roomData.speed === 'fast' ? 'selected' : ''
          }`}
        >
          Rápido
        </button>
      </div>
    </div>
  );
}

RoomSpeedSelector.propTypes = {
  roomData: PropTypes.shape({
    rounds: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    speed: PropTypes.oneOf(['lazy', 'medium', 'fast']),
    themeList: PropTypes.arrayOf(PropTypes.string).isRequired,
    password: PropTypes.string,
  }).isRequired,
  setRoomData: PropTypes.func.isRequired,
};

export default RoomSpeedSelector;
