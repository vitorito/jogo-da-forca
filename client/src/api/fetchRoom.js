import api from './api';

const fetchRoom = async (roomId) => {
  const res = await api.get(`/room/${roomId}`);
  console.log(res);
  return res.data;
};

export default fetchRoom;
