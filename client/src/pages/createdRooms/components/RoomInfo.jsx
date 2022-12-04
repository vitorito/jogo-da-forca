import PropTypes from 'prop-types';
import { useContext, useState } from 'react';
import { FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import gc from '../../../config/gameConstraints';
import { MatchContext } from '../../../providers/MatchProvider';
import { PlayerContext } from '../../../providers/PlayerProvider';
import joinRoom from '../../../socket/joinRoom';
import RoomDetails from './RoomDetails';
import RoomThemes from './RoomThemes';

function RoomInfo({ room, handleSelectRoom }) {
  const [roomPassword, setRoomPassword] = useState('');
  const { nick } = useContext(PlayerContext);
  const { setRoom, setPlayer } = useContext(MatchContext);

  const navigate = useNavigate();

  async function handleEnterRoom() {
    const data = {
      roomId: room.id,
      password: roomPassword,
      nick: nick.value,
    };

    joinRoom(data, (res) => {
      if (res.errors) return;

      setPlayer(res.player);
      setRoom(res.room);
      navigate(`/${res.room.id}`);
    });
  }

  return (
    <>
      <div
        className="bg-yellow-600 flex flex-col justify-between gap-3 h-full p-4 sm:p-6
        border-2 border-black rounded-lg overflow-auto shadow shadow-black font-medium"
      >
        <div className="rounded-gray-bg flex items-center justify-center gap-2 w-fit px-5 m-auto">
          {room.isPrivate && <FaLock />}
          <span>Sala {room.id}</span>
        </div>
        <RoomDetails room={room} />
        <div className="flex flex-col grow overflow-auto">
          <span className="rounded-gray-bg px-2 w-fit mx-auto mb-2">
            {room.themes.length} Temas
          </span>
          <RoomThemes themes={room.themes} />
        </div>
        {room.isPrivate && (
          <label htmlFor="password">
            Senha
            <input
              type="password"
              id="password"
              placeholder="4 Dígitos..."
              maxLength={gc.ROOM_PASSWORD_LENGTH}
              value={roomPassword}
              onChange={(e) => setRoomPassword(e.target.value)}
              className="block w-full px-2 placeholder:text-black placeholder:text-base
              border-b border-gray-900 outline-none rounded"
            />
          </label>
        )}
      </div>
      <button
        type="button"
        onClick={handleEnterRoom}
        disabled={room.isPrivate && !hasCorrectPasswordLength(roomPassword)}
        className="btn mt-3"
      >
        Entrar na Sala
      </button>
      <button
        type="button"
        onClick={() => handleSelectRoom(null)}
        className="btn mt-2"
      >
        Voltar
      </button>
    </>
  );
}

function hasCorrectPasswordLength(password) {
  return password.length === gc.ROOM_PASSWORD_LENGTH;
}

RoomInfo.propTypes = {
  room: PropTypes.shape({
    id: PropTypes.string,
    themes: PropTypes.arrayOf(PropTypes.string),
    isPrivate: PropTypes.bool,
  }).isRequired,
  handleSelectRoom: PropTypes.func.isRequired,
};

export default RoomInfo;
