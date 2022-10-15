import api from './api';

const fetchRoom = async (roomId) => api.get(`/room/${roomId}`);

export default fetchRoom;
