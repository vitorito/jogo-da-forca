import _api from './_api';

const createRoom = async (roomData) => _api.post('/room', roomData);

export default createRoom;
