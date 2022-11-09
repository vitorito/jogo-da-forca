import { useEffect, useState } from 'react';

const EMPTY_ROOM = {
  id: '',
  isPrivate: false,
  currentRound: 0,
  totalRounds: 0,
  speed: '',
  themes: [],
  players: [],
  round: {
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

  // TODO fazer uma chamada na api
  useEffect(() => {
    setRoom({
      id: roomId,
      isPrivate: true,
      currentRound: 1,
      totalRounds: 20,
      speed: 'fast',
      themes: ['fruta', 'nome', 'carro', 'casa'],
      round: {
        theme: 'fruta',
        playerInTurn: {
          id: "1",
          nick: 'marcus',
        },
      },
      players: [
        {
          id: "2",
          nick: 'jao',
          points: 20,
          round: {
            word: 'b*n*n*-c*r*m*e*l*d*-*ç*c*r*d*a',
            correctLetters: ['b', 'n', 'c', 'r', 'm', 'l', 'd'],
            wrongLetters: [],
          }
        },
        {
          id: "1",
          nick: 'marcus',
          points: 30,
          round: {
            word: 'b*n*n*-c*r*m*e*l*d*-*ç*c*r*d*a',
            correctLetters: ['b', 'n', 'c', 'r', 'm', 'l', 'd'],
            wrongLetters: [],
          }
        },
        {
          id: "21",
          nick: 'morfeu',
          points: 5,
          round: {
            word: 'b*n*n*-c*r*m*e*l*d*-*ç*c*r*d*a',
            correctLetters: ['b', 'n', 'c', 'r', 'm', 'l', 'd'],
            wrongLetters: [],
          }
        },
        {
          id: "31",
          nick: 'cleber',
          points: 96,
          round: {
            word: 'b*n*n*-c*r*m*e*l*d*-*ç*c*r*d*a',
            correctLetters: ['b', 'n', 'c', 'r', 'm', 'l', 'd'],
            wrongLetters: [],
          }
        },
        {
          id: "100",
          nick: 'marcia',
          points: 86,
          round: {
            word: 'b*n*n*-c*r*m*e*l*d*-*ç*c*r*d*a',
            correctLetters: ['b', 'n', 'c', 'r', 'm', 'l', 'd'],
            wrongLetters: [],
          }
        },
        {
          id: "200",
          nick: 'Stackz',
          points: 13,
          round: {
            word: 'b*n*n*-c*r*m*e*l*d*-*ç*c*r*d*a',
            correctLetters: ['b', 'n', 'c', 'r', 'm', 'l', 'd'],
            wrongLetters: [],
          }
        },
        {
          id: "300",
          nick: 'LEPRECHAUSAKDSAKDKLSDSADKSKLD',
          points: 13,
          round: {
            word: 'b*n*n*-c*r*m*e*l*d*-*ç*c*r*d*a',
            correctLetters: ['b', 'n', 'c', 'r', 'm', 'l', 'd'],
            wrongLetters: ['z', 'p', 'w', 'k', 'j', 't'],
          }
        },
        {
          id: "110",
          nick: 'GodZin',
          points: 6,
          round: {
            word: 'b*n*n*-c*r*m*e*l*d*-*ç*c*r*d*a',
            correctLetters: ['b', 'n', 'c', 'r', 'm', 'l', 'd'],
            wrongLetters: [],
          }
        },
        {
          id: "210",
          nick: 'JaMbAu',
          points: 5,
          round: {
            word: 'b*n*n*-c*r*m*e*l*d*-*ç*c*r*d*a',
            correctLetters: ['b', 'n', 'c', 'r', 'm', 'l', 'd'],
            wrongLetters: [],
          }
        },
        {
          id: "301",
          nick: 'ZHAZaan',
          points: 96,
          round: {
            word: 'b*n*n*-c*r*m*e*l*d*-*ç*c*r*d*a',
            correctLetters: ['b', 'n', 'c', 'r', 'm', 'l', 'd'],
            wrongLetters: [],
          }
        },
      ],
    });
  }, []);

  return room;
}

export default useRoom;
