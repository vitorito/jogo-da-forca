import _api from './_api';

const fetchRoom = async (roomId) => _api.get(`/room/${roomId}`);

export default fetchRoom;
