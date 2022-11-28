import PropTypes from 'prop-types';
import { BsFillDoorClosedFill } from 'react-icons/bs';
import { FaLock, FaUser } from 'react-icons/fa';
import gc from '../../../config/gameConstraints';

function RoomThumb({ room, handleSelectRoom }) {
  return (
    <li>
      <button
        type="button"
        onClick={() => handleSelectRoom(room.id)}
        className="hover:bg-yellow-500 focus:bg-yellow-500 flex items-center
        justify-between w-full h-12 px-2 pt-3 mt-2 transition-all duration-300
        border-b border-gray-900 rounded-t outline-none font-medium sm:text-lg"
      >
        <div title="Sala" className="flex items-center gap-1 w-16">
          <BsFillDoorClosedFill />
          <span className="pt-0.5">{room.id}</span>
        </div>
        {room.isPrivate && <FaLock title="Privado" />}
        <div title="Jogadores" className="flex items-center gap-0.5">
          <FaUser />
          <span className="w-12 text-right">
            {room.players.length}/{gc.MAX_ROOM_PLAYERS}
          </span>
        </div>
      </button>
    </li>
  );
}

RoomThumb.propTypes = {
  room: PropTypes.shape({
    id: PropTypes.string.isRequired,
    players: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
      })
    ).isRequired,
    isPrivate: PropTypes.bool.isRequired,
  }).isRequired,
  handleSelectRoom: PropTypes.func.isRequired,
};

export default RoomThumb;
