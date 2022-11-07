import React, { useContext } from 'react';
import { FaClock, FaLock, FaUser } from 'react-icons/fa';
import { SlReload } from 'react-icons/sl';
import { VscBook } from 'react-icons/vsc';
import { Link } from 'react-router-dom';
import gc from '../../../config/gameConstraints';
import { MatchContext } from '../../../providers/MatchProvider';
import InfoItem from './InfoItem';
import RoomThemes from './RoomThemes';

function RoomInfo() {
  const room = useContext(MatchContext);

  return (
    <div className="flex flex-col gap-5 items-center overflow-hidden">
      <div
        className="rounded-gray-bg flex items-center gap-2 my-2
        text-xl sm:text-2xl w-fit px-3 py-0.5 border-2 border-black"
      >
        {room?.isPrivate && <FaLock />}
        <span>Sala {room?.id}</span>
      </div>
      <div
        className="flex justify-center flex-wrap sm:flex-nowrap gap-5
      max-w-xs sm:max-w-none"
      >
        <InfoItem
          title="Jogadores"
          info={`${room?.players.length}`}
          icon={<FaUser size={18} />}
        />
        <InfoItem
          title="Rodadas"
          info={`${room?.currentRound}/${room?.totalRounds}`}
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
      <Link to="/rooms" className="btn block w-full mb-1">
        Voltar
      </Link>
    </div>
  );
}

export default RoomInfo;
