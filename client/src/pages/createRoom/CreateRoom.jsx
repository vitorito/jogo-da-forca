import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CreateRoomForm from './components/CreateRoomForm';
import RoomThemeList from './components/RoomThemeList';

function CreateRoom() {
  const [roomData, setRoomData] = useState({
    password: '',
    rounds: '',
    themeList: [],
  });

  return (
    <div className="main-container justify-between sm:justify-center">
      <h1 className="page-title mb-10">Crie sua Sala</h1>
      <div className="form-container gap-3">
        <CreateRoomForm roomData={roomData} setRoomData={setRoomData} />
        <RoomThemeList roomData={roomData} setRoomData={setRoomData} />
        <button type="button" className="btn mt-3">
          Criar Sala
        </button>
        <Link to="/" className="btn">
          Voltar
        </Link>
      </div>
    </div>
  );
}

export default CreateRoom;
