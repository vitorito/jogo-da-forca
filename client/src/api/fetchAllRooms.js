import _api from './_api';

const fetchAllRooms = async () => _api.get('/rooms');

export default fetchAllRooms;
