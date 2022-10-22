/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useRooms from '../../hooks/useRooms';
import CreatedRoomsList from './components/CreatedRoomsList';
import RoomInfo from './components/RoomInfo';

function CreatedRooms() {
  const [rooms, setRooms] = useRooms();
  const [idSelectedRoom, setIdSelectedRoom] = useState('');

  const handleSelectRoom = (roomId) => {
    setIdSelectedRoom((prev) => (prev !== roomId ? roomId : ''));
  };

  return (
    <div className="main-container">
      <h1 className="page-title">Salas Criadas</h1>
      <div className="sm-container h-full py-2 overflow-hidden">
        {idSelectedRoom === '' ? (
          <>
            <CreatedRoomsList
              rooms={rooms}
              idSelectedRoom={idSelectedRoom}
              onSelectRoom={handleSelectRoom}
            />
            <Link to="/" className="btn mt-6">
              Voltar
            </Link>
          </>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

// <div
// className="sm-container justify-between bg-yellow-600 h-full my-8
//     shadow-md shadow-black/70 rounded-md"
// />
// {idSelectedRoom === '' ? (
//   <>
//     <CreatedRoomsList
//       rooms={rooms}
//       idSelectedRoom={idSelectedRoom}
//       handleSelectRoom={handleSelectRoom}
//     />
//     <Link to="/" className="btn mt-3">
//       Voltar
//     </Link>
//   </>
// ) : (
//   <div
//     className="bg-yellow-600 my-8 grow overflow-scroll
//     shadow-md shadow-black/70 rounded-md"
//   >
//     <button
//       type="button"
//       disabled={idSelectedRoom === ''}
//       className="btn"
//     >
//       Entrar na Sala
//     </button>
//   </div>
// )}

export default CreatedRooms;
