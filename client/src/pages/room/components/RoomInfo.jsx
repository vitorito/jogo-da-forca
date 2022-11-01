import React, { useContext } from 'react';
import { FaClock, FaLock, FaUser } from 'react-icons/fa';
import { SlReload } from 'react-icons/sl';
import { VscBook } from 'react-icons/vsc';
import gc from '../../../config/gameConstraints';
import { MatchContext } from '../../../providers/MatchProvider';
import InfoItem from './InfoItem';
import RoomThemes from './RoomThemes';

function RoomInfo() {
  const room = useContext(MatchContext);

  return (
    <div className="sm-container h-full gap-5 items-center">
      <div
        className="rounded-gray-bg flex items-center gap-2 my-2
        text-xl sm:text-2xl w-fit px-3 py-0.5 border-2 border-black"
      >
        {room?.isPrivate && <FaLock />}
        <span>Sala {room?.id}</span>
      </div>
      <div className="flex justify-center flex-wrap sm:flex-nowrap gap-5 sm:gap-6">
        <InfoItem
          title="Jogadores"
          info={`${room?.players.length}`}
          icon={<FaUser size={18} />}
        />
        <InfoItem
          title="Rodadas"
          info={`${room?.currentRound}/${room?.maxRounds}`}
          icon={<SlReload size={18} />}
        />
        <InfoItem
          title="Tempo"
          info={`${gc.SPEED_NAMES[room?.speed]}`}
          icon={<FaClock size={18} />}
        />
        <InfoItem
          title="Temas"
          info={`${room?.themes.length}`}
          icon={<VscBook size={22} />}
        />
      </div>
      <RoomThemes />
      <div className="w-full">
        <button type="button" className="btn">
          Blabla
        </button>
      </div>
    </div>
  );
}

export default RoomInfo;
