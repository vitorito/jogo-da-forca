import api from '../api';

async function useCreateRoom(data) {
  const res = await api.createRoom(data);
  return res.data.id;
}

export default useCreateRoom;
