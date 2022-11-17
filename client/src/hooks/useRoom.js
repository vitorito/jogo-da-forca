import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import api from '../api';
import socket from '../socket/socket';

const queryConfig = {
  refetchOnWindowFocus: false,
  refetchInterval: false,
};

function useRoom(roomId) {
  const query = useQuery(["room", roomId], fetchRoom, queryConfig);

  useEffect(() => {
    socket.on('room_update', () => {
      query.refetch();
    });
  }, []);

  async function fetchRoom() {
    const { data } = await api.fetchRoom(roomId);
    return data;
  }

  return query;
}

export default useRoom;
