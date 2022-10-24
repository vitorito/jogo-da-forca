import { createContext, useMemo, useState } from 'react';
import useRooms from '../hooks/useRooms';

export const SelectRoomContext = createContext(null);

// eslint-disable-next-line react/prop-types
function SelectRoomProvider({ children }) {
  const { rooms } = useRooms();
  const [selectedRoom, setSelectedRoom] = useState(null);

  const findRoom = (roomId) => rooms.find((room) => room.id === roomId);

  const handleSelectRoom = (roomId) => {
    setSelectedRoom((prev) => {
      if (prev?.id === roomId) return null;

      return findRoom(roomId);
    });
  };

  const value = useMemo(
    () => ({
      rooms,
      selectedRoom,
      handleSelectRoom,
    }),
    [rooms, selectedRoom, handleSelectRoom]
  );

  return (
    <SelectRoomContext.Provider value={value}>
      {children}
    </SelectRoomContext.Provider>
  );
}

export default SelectRoomProvider;
