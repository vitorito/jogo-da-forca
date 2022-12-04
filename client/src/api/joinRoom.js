import _api from './_api';

async function joinRoom(id, data) {
  return _api.post(`/room/${id}`, data);
};

export default joinRoom;
