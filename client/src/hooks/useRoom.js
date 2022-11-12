import { useEffect, useState } from 'react';
import api from '../api';

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
    playerInTurn: {
      id: '',
      nick: '',
    },
    state: {
      word: '',
      correctLetters: [],
      wrongLetters: [],
    },
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

// id: roomId,
// isPrivate: true,
// currentRound: 1,
// totalRounds: 20,
// speed: 'fast',
// themes: ['fruta', 'nome', 'carro', 'casa'],
// round: {
//   theme: 'fruta',
//   playerInTurn: {
//     id: "2",
//     nick: 'marcus',
//   },
// },
// players: [
//   {
//     id: "2",
//     nick: 'jao',
//     points: 20,
//     round: {
//       word: 'b*n*n*-c*r*m*e*l*d*-d*ce',
//       correctLetters: ['b', 'n', 'c', 'r', 'm', 'l', 'd'],
//       wrongLetters: [],
//     }
//   },
//   {
//     id: "1",
//     nick: 'marcus',
//     points: 30,
//     round: {
//       word: 'b*n*n*-c*r*m*e*l*d*-d*ce',
//       correctLetters: ['b', 'n', 'c', 'r', 'm', 'l', 'd'],
//       wrongLetters: [],
//     }
//   }

export default useRoom;
