import PropTypes from 'prop-types';
import { BsFillDoorClosedFill } from 'react-icons/bs';
import { FaLock, FaUser } from 'react-icons/fa';
import gc from '../../../config/gameConstraints';

function RoomThumb({ room, onSelectRoom }) {
  return (
    <button
      type="button"
      onClick={() => onSelectRoom(room.id)}
      className="hover:bg-yellow-500 focus:bg-yellow-500 flex items-center
        justify-between w-full h-12 px-2 pt-3 mt-2 text-gray-900 text-lg font-semibold
        transition-all duration-300 border-b border-gray-900 rounded-t outline-none"
    >
      <div title="Sala" className="flex items-center gap-1">
        <BsFillDoorClosedFill />
        {room.id}
      </div>
      {room.isPrivate && <FaLock title="Privado" />}
      <div title="Jogadores" className="flex items-center gap-0.5">
        <FaUser />
        <span className="w-12 text-right">
          {room.players}/{gc.MAX_ROOM_PLAYERS}
        </span>
      </div>
    </button>
  );
}

RoomThumb.propTypes = {
  room: PropTypes.shape({
    id: PropTypes.string.isRequired,
    players: PropTypes.number.isRequired,
    isPrivate: PropTypes.bool.isRequired,
    currentRound: PropTypes.number.isRequired,
    maxRounds: PropTypes.number.isRequired,
  }).isRequired,
  onSelectRoom: PropTypes.func.isRequired,
};

export default RoomThumb;
