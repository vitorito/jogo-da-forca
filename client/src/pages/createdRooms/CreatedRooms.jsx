/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useRooms from '../../hooks/useRooms';
import CreatedRoomsList from './components/CreatedRoomsList';
import RoomDetails from './components/RoomDetails';

function CreatedRooms() {
  const [rooms, setRooms] = useRooms();
  const [idSelectedRoom, setIdSelectedRoom] = useState('');

  const handleSelectRoom = (roomId) => {
    setIdSelectedRoom((prev) => (prev !== roomId ? roomId : ''));
  };

  return (
    <div className="main-container">
      <h1 className="page-title">Salas Criadas</h1>
      <div className="sm-container h-full">
        <div
          className="gap-4 w-full h-[70%] my-10
        shadow-md shadow-black/70 rounded-md overflow-hidden"
        >
          <CreatedRoomsList
            rooms={rooms}
            idSelectedRoom={idSelectedRoom}
            handleSelectRoom={handleSelectRoom}
          />
          <RoomDetails />
        </div>
        <button type="button" disabled={idSelectedRoom === ''} className="btn">
          Entrar na Sala
        </button>
        <Link to="/" className="btn mt-3">
          Voltar
        </Link>
      </div>
    </div>
  );
}

export default CreatedRooms;
