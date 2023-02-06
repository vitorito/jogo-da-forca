import { useQuery } from '@tanstack/react-query';
import api from '../api';

const queryConfig = {
  refetchInterval: 60 * 1000, // 60 seconds
};

function useRooms() {
  const query = useQuery(['rooms'], async () => {
    const res = await api.fetchAllRooms();
    return res.data;
  }, queryConfig);

  return query;
}

export default useRooms;
