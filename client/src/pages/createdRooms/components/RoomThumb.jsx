import PropTypes from 'prop-types';
import { BsFillDoorClosedFill } from 'react-icons/bs';
import { FaLock, FaUser } from 'react-icons/fa';
import { SlReload } from 'react-icons/sl';
import gc from '../../../config/gameConstraints';

function RoomThumb({ room, isOpen, onClick }) {
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      className={`focus:bg-yellow-500 flex items-center justify-between mt-1
      text-gray-900 text-lg font-semibold cursor-pointer outline-none
      transition-all duration-200 border-gray-900 border-b
      ${
        isOpen
          ? 'bg-yellow-500 flex-col h-28 p-3 border-x-2 border-t-2 rounded shadow shadow-black'
          : 'hover:bg-yellow-500 h-12 px-2 pt-3 rounded-t'
      }`}
    >
      <div
        className={`flex items-center gap-1 ${
          isOpen ? 'flex-row-reverse rounded-gray-bg w-fit px-5' : 'w-full'
        }`}
      >
        <BsFillDoorClosedFill
          title="Sala"
          className={isOpen ? 'hidden' : 'text-gray-900'}
        />
        <div title="Sala" className={isOpen ? 'w-fit' : 'w-14'}>
          <span className={isOpen ? 'w-fit mx-1' : 'sr-only'}>Sala</span>
          {room.id}
        </div>
        {room.isPrivate && (
          <FaLock title="Privado" className={isOpen ? '' : 'm-auto'} />
        )}
      </div>
      <div className={isOpen ? 'flex items-center justify-around w-full' : ''}>
        <div className={isOpen ? 'flex items-center gap-0.5' : 'hidden'}>
          <SlReload />
          <span className="w-12 text-right">
            {room.currentRound}/{room.maxRounds}
          </span>
        </div>
        <div title="Jogadores" className="flex items-center gap-0.5">
          <FaUser />
          <span className="w-12 text-right">
            {room.players}/{gc.MAX_ROOM_PLAYERS}
          </span>
        </div>
      </div>
    </div>
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
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default RoomThumb;
