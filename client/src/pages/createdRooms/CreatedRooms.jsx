/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';
import useFetchRooms from '../../hooks/useFetchRooms';
import CreatedRoomsGrid from './components/CreatedRoomsGrid';
import RoomDetails from './components/RoomDetails';

function CreatedRooms() {
  const [rooms, setRooms] = useFetchRooms();

  return (
    <div className="main-container justify-between">
      <h1 className="page-title">Salas Criadas</h1>
      <div className="flex flex-col w-full p-6 grow gap-4">
        <CreatedRoomsGrid rooms={rooms} />
        <RoomDetails />
      </div>
      <Link to="/" className="btn sm-container">
        Voltar
      </Link>
    </div>
  );
}

export default CreatedRooms;
