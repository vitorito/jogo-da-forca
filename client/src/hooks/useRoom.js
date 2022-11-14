import { useQuery } from '@tanstack/react-query';
import api from '../api';

// const EMPTY_ROOM = {
//   id: '',
//   isPrivate: false,
//   currentRound: 0,
//   totalRounds: 0,
//   speed: '',
//   themes: [],
//   players: [],
//   round: {
//     theme: '',
//     playerInTurn: '',
//     state: gc.ROOM_MATCH_STATES.waiting,
//   },
// };

function useRoom(roomId) {
  return useQuery(["room", roomId], async () => {
    const res = await api.fetchRoom(roomId);
    return res.data;
  });
}

export default useRoom;
