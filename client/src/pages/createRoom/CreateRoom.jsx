import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import gc from '../../config/gameConstraints';
import CreateRoomForm from './components/CreateRoomForm';
import RoomSpeedSelector from './components/RoomSpeedSelector';
import RoomThemeList from './components/RoomThemeList';

function CreateRoom() {
  const [roomData, setRoomData] = useState({
    password: '',
    rounds: '',
    speed: 'lazy',
    themeList: [],
  });
  const [isValidRoomData, setIsValidRoomData] = useState(false);

  useEffect(() => {
    const validRoomData = validateRoomData(roomData);
    setIsValidRoomData(validRoomData);
  }, [roomData]);

  return (
    <div className="main-container justify-between sm:justify-center">
      <h1 className="page-title mb-10">Crie sua Sala</h1>
      <div className="form-container gap-3">
        <CreateRoomForm roomData={roomData} setRoomData={setRoomData} />
        <RoomSpeedSelector roomData={roomData} setRoomData={setRoomData} />
        <RoomThemeList roomData={roomData} setRoomData={setRoomData} />
        <button type="button" disabled={!isValidRoomData} className="btn mt-3">
          Criar Sala
        </button>
        <Link to="/" className="btn">
          Voltar
        </Link>
      </div>
    </div>
  );
}

function validateRoomData(roomData) {
  const { password, rounds, themeList } = roomData;
  const hasCorrectPasswordLen =
    !password || password.length === gc.ROOM_PASSWORD_LENGTH;

  const hasCorrectRoundsNum =
    rounds >= gc.MIN_MATCH_ROUNDS && rounds <= gc.MAX_MATCH_ROUNDS;

  const hasCorrectThemeList =
    themeList.length >= gc.MIN_ROOM_THEMES &&
    themeList.length <= gc.MAX_ROOM_THEMES;

  return hasCorrectPasswordLen && hasCorrectRoundsNum && hasCorrectThemeList;
}

export default CreateRoom;
