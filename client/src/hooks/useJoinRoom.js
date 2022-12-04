import api from '../api';

function useJoinRoom() {
  async function joinRoom({ id, playerNick, password }) {
    const data = { nick: playerNick, password };
    const res = await api.joinRoom(id, data);
    return res.statusCode !== 200;
  }
  return joinRoom;
}

export default useJoinRoom;
