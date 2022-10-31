import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import gc from '../../config/gameConstraints';
import useEnterRoom from '../../hooks/useEnterRoom';
import { SelectRoomContext } from '../../providers/SelectRoomProvider';
import CreatedRoomsList from './components/CreatedRoomsList';
import RoomInfo from './components/RoomInfo';

function CreatedRooms() {
  const { selectedRoom, handleSelectRoom } = useContext(SelectRoomContext);
  const [roomPassword, setRoomPassword] = useState('');
  const navigate = useNavigate();

  async function handleEnterRoom() {
    const data = await useEnterRoom({
      id: selectedRoom.id,
      password: roomPassword,
    });

    if (data.errors) return;

    navigate(`/${selectedRoom.id}`, { state: { rooms: data.room } });
  }

  function hasCorrectPasswordLength() {
    return (
      roomPassword.length === 0 ||
      roomPassword.length === gc.ROOM_PASSWORD_LENGTH
    );
  }

  return (
    <div className='flex flex-col items-center justify-center h-full w-full'>
      <h1 className="page-title">Salas Criadas</h1>
      <div className="sm-container h-full overflow-y-auto py-2">
        {!selectedRoom ? (
          <>
            <CreatedRoomsList />
            <Link to="/" className="btn mt-6">
              Voltar
            </Link>
          </>
        ) : (
          <>
            <RoomInfo
              roomPassword={roomPassword}
              setRoomPassword={setRoomPassword}
            />
            <button
              type="button"
              onClick={handleEnterRoom}
              disabled={!hasCorrectPasswordLength()}
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
        )}
      </div>
    </div>
  );
}

export default CreatedRooms;
