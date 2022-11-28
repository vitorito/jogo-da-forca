import PropTypes from 'prop-types';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { FaUser } from 'react-icons/fa';
import { SlReload } from 'react-icons/sl';
import gc from '../../../config/gameConstraints';

function RoomDetails({ room }) {
  return (
    <div
      className="flex items-center justify-evenly py-2 flex-wrap gap-2
      border-y border-gray-900 text-base sm:text-lg"
    >
      <div className="flex flex-col items-center justify-center">
        <span className="">Jogadores</span>
        <span title="Jogadores" className="flex items-center gap-1">
          <FaUser />
          {room.players.length}/{gc.MAX_ROOM_PLAYERS}
        </span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <span className="">Rodada</span>
        <span title="Rodada" className="flex items-center gap-1">
          <SlReload />
          {room.currentRound}/{room.totalRounds}
        </span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <span className="">Tempo</span>
        <span title="Tempo" className="flex items-center gap-1">
          <AiOutlineClockCircle className="text-lg sm:text-xl" />
          {gc.SPEED_NAMES[room.speed]}
        </span>
      </div>
    </div>
  );
}

RoomDetails.propTypes = {
  room: PropTypes.shape({
    currentRound: PropTypes.number.isRequired,
    totalRounds: PropTypes.number.isRequired,
    speed: PropTypes.oneOf(Object.keys(gc.SPEED_NAMES)),
    players: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
      })
    ),
  }).isRequired,
};

export default RoomDetails;
