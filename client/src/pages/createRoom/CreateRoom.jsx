import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LoadingSpin from '../../components/LoadingSpin';
import gc from '../../config/gameConstraints';
import { MatchContext } from '../../providers/MatchProvider';
import { PlayerContext } from '../../providers/PlayerProvider';
import createRoom from '../../socket/createRoom';
import socket from '../../socket/socket';
import CreateRoomForm from './components/CreateRoomForm';
import RoomSpeedSelector from './components/RoomSpeedSelector';
import RoomThemeList from './components/RoomThemeList';

const EMPTY_ROOM_DATA = {
  password: '',
  totalRounds: '',
  speed: 'lazy',
  themes: [],
};

function CreateRoom() {
  const { nick } = useContext(PlayerContext);
  const [roomData, setRoomData] = useState(EMPTY_ROOM_DATA);
  const [isValidRoomData, setIsValidRoomData] = useState(false);
  const { setRoom, setPlayer } = useContext(MatchContext);

  const navigate = useNavigate();

  useEffect(() => {
    const validRoomData = validateRoomData(roomData);
    setIsValidRoomData(validRoomData);
  }, [roomData]);

  async function handleCreateRoomSubmit() {
    const data = {
      playerData: {
        socketId: socket.id,
        nick: nick.value,
      },
      roomData: {
        ...roomData,
        totalRounds: parseInt(roomData.totalRounds, 10),
      },
    };

    createRoom(data, (res) => {
      if (res.errors) return;

      setRoom(res.room);
      setPlayer(res.player);
      navigate(`/${res.room.id}`);
    });
  }

  return (
    <div>
      <h1 className="page-title mb-10">Crie sua Sala</h1>
      <div className="flex flex-col max-w-[80vw] sm:max-w-sm w-full gap-3">
        <CreateRoomForm roomData={roomData} setRoomData={setRoomData} />
        <RoomSpeedSelector roomData={roomData} setRoomData={setRoomData} />
        <RoomThemeList roomData={roomData} setRoomData={setRoomData} />
        <button
          type="submit"
          disabled={!isValidRoomData || createRoom.isLoading}
          onClick={handleCreateRoomSubmit}
          className="flex items-center justify-center gap-2 btn mt-3"
        >
          Criar Sala
          {createRoom.isLoading && (
            <LoadingSpin className="w-6 h-6 m-0 border-x-white" />
          )}
        </button>
        <Link to="/" className="btn">
          Voltar
        </Link>
      </div>
    </div>
  );
}

function validateRoomData(roomData) {
  const { password, totalRounds, themes } = roomData;
  const hasCorrectPasswordLen =
    !password || password.length === gc.ROOM_PASSWORD_LENGTH;

  const hasCorrectRoundsNum =
    totalRounds >= gc.MIN_MATCH_ROUNDS && totalRounds <= gc.MAX_MATCH_ROUNDS;

  const hasCorrectThemeList =
    themes.length >= gc.MIN_ROOM_THEMES && themes.length <= gc.MAX_ROOM_THEMES;

  return hasCorrectPasswordLen && hasCorrectRoundsNum && hasCorrectThemeList;
}

export default CreateRoom;
