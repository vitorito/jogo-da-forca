import { useMutation } from '@tanstack/react-query';
import api from '../api';

function useCreateRoom() {
  return useMutation(async (data) => {
    const res = await api.createRoom(data);
    return res.data.id;
  });
}

export default useCreateRoom;
