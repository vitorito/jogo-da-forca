import { useState } from 'react';

function useRooms() {
  const [rooms, setRooms] = useState([
    {
      id: '3000',
      players: 10,
      isPrivate: false,
      currentRound: 0,
      maxRounds: 20,
    },
    {
      id: '30011',
      players: 0,
      isPrivate: true,
      currentRound: 0,
      maxRounds: 20,
    },
    {
      id: '3002',
      players: 0,
      isPrivate: true,
      currentRound: 0,
      maxRounds: 20,
    },
    {
      id: '6003',
      players: 0,
      isPrivate: true,
      currentRound: 0,
      maxRounds: 20,
    },
    {
      id: '3004',
      players: 10,
      isPrivate: true,
      currentRound: 0,
      maxRounds: 20,
    },
    {
      id: '3005',
      players: 0,
      isPrivate: true,
      currentRound: 0,
      maxRounds: 20,
    },
    {
      id: '3006',
      players: 0,
      isPrivate: true,
      currentRound: 0,
      maxRounds: 20,
    },
    {
      id: '6007',
      players: 0,
      isPrivate: true,
      currentRound: 0,
      maxRounds: 20,
    },
    {
      id: '3008',
      players: 10,
      isPrivate: true,
      currentRound: 0,
      maxRounds: 20,
    },
    {
      id: '3009',
      players: 0,
      isPrivate: true,
      currentRound: 0,
      maxRounds: 20,
    },
    {
      id: '3010',
      players: 0,
      isPrivate: true,
      currentRound: 0,
      maxRounds: 20,
    },
    {
      id: '6011',
      players: 0,
      isPrivate: true,
      currentRound: 0,
      maxRounds: 20,
    },
    {
      id: '3012',
      players: 10,
      isPrivate: true,
      currentRound: 0,
      maxRounds: 20,
    },
    {
      id: '3013',
      players: 0,
      isPrivate: true,
      currentRound: 0,
      maxRounds: 20,
    },
    {
      id: '3014',
      players: 0,
      isPrivate: true,
      currentRound: 0,
      maxRounds: 20,
    },
    {
      id: '6015',
      players: 0,
      isPrivate: true,
      currentRound: 0,
      maxRounds: 20,
    },
  ]);

  // useEffect(() => {
  //   async function fetchRooms() {
  //     const res = await api.fetchAllRooms();
  //     if (res.status !== 200) {
  //       return;
  //     }
  //     setRooms(res.data);
  //   }

  //   fetchRooms();
  // }, []);

  return [rooms, setRooms];
}

export default useRooms;
