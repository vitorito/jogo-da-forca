import _api from './_api';

const fetchAllRooms = async () => _api.get('/room');

export default fetchAllRooms;
