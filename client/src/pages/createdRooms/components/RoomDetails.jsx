import { useContext } from 'react';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { FaUser } from 'react-icons/fa';
import { SlReload } from 'react-icons/sl';
import gc from '../../../config/gameConstraints';
import { SelectRoomContext } from '../../../providers/SelectRoomProvider';

function RoomDetails() {
  const { selectedRoom: room } = useContext(SelectRoomContext);

  return (
    <div
      className="flex items-center justify-evenly py-2 flex-wrap gap-2
      border-y border-gray-900 text-base sm:text-lg"
    >
      <div className="flex flex-col items-center justify-center">
        <span className="">Jogadores</span>
        <span title="Jogadores" className="flex items-center gap-1">
          <FaUser />
          {room.currentRound}/{room.totalRounds}
        </span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <span className="">Rodadas</span>
        <span title="Rodadas" className="flex items-center gap-1">
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

export default RoomDetails;
