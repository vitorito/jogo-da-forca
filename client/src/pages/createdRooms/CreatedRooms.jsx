import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { SelectRoomContext } from '../../providers/SelectRoomProvider';
import CreatedRoomsList from './components/CreatedRoomsList';
import RoomInfo from './components/RoomInfo';

function CreatedRooms() {
  const { selectedRoom, handleSelectRoom } = useContext(SelectRoomContext);

  return (
    <div className="main-container">
      <h1 className="page-title">Salas Criadas</h1>
      <div className="sm-container h-full overflow-y-scroll py-2">
        {!selectedRoom ? (
          <>
            <CreatedRoomsList />
            <Link to="/" className="btn mt-6">
              Voltar
            </Link>
          </>
        ) : (
          <>
            <RoomInfo />
            <button type="button" className="btn mt-3">
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
