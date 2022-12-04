import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';
import api from '../api';
import socket from '../socket/socket';

const queryConfig = {
  refetchOnWindowFocus: false,
  refetchInterval: false,
};

function useRoom(roomId) {
  const queryClient = useQueryClient();
  const query = useQuery(["room", roomId], fetchRoom, queryConfig);

  useEffect(() => {
    socket.on('room_update', (roomData) => {
      console.log('updaitou');
      queryClient.setQueryData(["room", roomId], roomData);
    });
  }, []);

  async function fetchRoom() {
    const { data } = await api.fetchRoom(roomId);
    return data;
  }

  return query;
}

export default useRoom;
