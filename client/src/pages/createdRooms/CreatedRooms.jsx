import { Link } from 'react-router-dom';
import CreatedRoomsGrid from './components/CreatedRoomsGrid';
import RoomDetails from './components/RoomDetails';

function CreatedRooms() {
  return (
    <div className="main-container justify-between">
      <h1 className="page-title">Salas Criadas</h1>
      <div className="flex">
        <CreatedRoomsGrid />
        <RoomDetails />
      </div>
      <Link to="/" className="btn form-container">
        Voltar
      </Link>
    </div>
  );
}

export default CreatedRooms;
