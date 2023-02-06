import { useState } from 'react';
import { Link } from 'react-router-dom';
import LoadingSpin from '../../components/LoadingSpin';
import useRooms from '../../hooks/useRooms';
import CreatedRoomsList from './components/CreatedRoomsList';
import RoomInfo from './components/RoomInfo';

function CreatedRooms() {
  const { data: rooms, isLoading } = useRooms();
  const [selectedRoom, setSelectedRoom] = useState(null);

  const handleSelectRoom = (roomId) => {
    const room = rooms.find((r) => r.id === roomId);
    setSelectedRoom(room);
  };

  if (isLoading) {
    return <LoadingSpin />;
  }

  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <h1 className="page-title mb-4">Salas Criadas</h1>
      <div className="sm-container h-full overflow-y-auto py-2">
        {!selectedRoom ? (
          <>
            <CreatedRoomsList
              rooms={rooms}
              handleSelectRoom={handleSelectRoom}
            />
            <Link to="/" className="btn mt-6">
              Voltar
            </Link>
          </>
        ) : (
          <RoomInfo room={selectedRoom} handleSelectRoom={handleSelectRoom} />
        )}
      </div>
    </div>
  );
}

export default CreatedRooms;
