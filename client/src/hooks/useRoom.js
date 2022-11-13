import { useEffect, useState } from 'react';
import api from '../api';
import gc from '../config/gameConstraints';

const EMPTY_ROOM = {
  id: '',
  isPrivate: false,
  currentRound: 0,
  totalRounds: 0,
  speed: '',
  themes: [],
  players: [],
  round: {
    theme: '',
    playerInTurn: '',
    state: gc.ROOM_MATCH_STATES.waiting,
  },
};

function useRoom(roomId) {
  const [room, setRoom] = useState(EMPTY_ROOM);

  useEffect(() => {
    api.fetchRoom(roomId).then((res) => {
      if (res.status === 200) {
        setRoom(res.data);
      }
    });
  }, []);

  return room;
}

export default useRoom;
