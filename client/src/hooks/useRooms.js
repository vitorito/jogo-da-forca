import { useState } from 'react';

function useRooms() {
  const [rooms, setRooms] = useState([
    {
      id: '3000',
      players: 10,
      isPrivate: true,
      currentRound: 0,
      totalRounds: 20,
      speed: 'fast',
      themes: ['fruta', 'nome', 'carro', 'casa', 'kkskskkskkskkskskkkeelf alflalflawlwallwallwalw', 'foeflflsfas', 'kka', 'lfapwoawslaslsa',
        'fasçfasfçwlw', 'skffçslfsçfsf', 'lefpeepfwfsf', 'çflfsçflsçfsf çlfalsamas salasaslçlas',
        'alaçslfasflçasfl lfasfçsafmaslçf aslfasfsalçflasf laçfaslfsfç', 'fslfsfksfkskf', 'salçsalçasl', 'fsçfsflsfçsf', 'ksasalsalaslas', 'skasaksakask',
        'saçlsalas', 'kakaskkask', 'saçsalçasçlas', 'aslçaslçaslasças', 'asçalcxçclçwwaw', 'ckclkccksk', 'saaslkasakas', 'jasjsjasjjsajs'],
    },
    {
      id: '3001',
      players: 0,
      isPrivate: true,
      currentRound: 0,
      totalRounds: 20,
      speed: 'fast',
      themes: ['fruta', 'nome', 'carro', 'casa']
    },
    {
      id: '3002',
      players: 0,
      isPrivate: true,
      currentRound: 0,
      totalRounds: 20,
      speed: 'fast',
      themes: ['fruta', 'nome', 'carro', 'casa']
    },
    {
      id: '6003',
      players: 0,
      isPrivate: true,
      currentRound: 0,
      totalRounds: 20,
      speed: 'fast',
      themes: ['fruta', 'nome', 'carro', 'casa']
    },
    {
      id: '3004',
      players: 10,
      isPrivate: true,
      currentRound: 0,
      totalRounds: 20,
      speed: 'fast',
      themes: ['fruta', 'nome', 'carro', 'casa']
    },
    {
      id: '3005',
      players: 0,
      isPrivate: true,
      currentRound: 0,
      totalRounds: 20,
      speed: 'fast',
      themes: ['fruta', 'nome', 'carro', 'casa']
    },
    {
      id: '3006',
      players: 0,
      isPrivate: true,
      currentRound: 0,
      totalRounds: 20,
      speed: 'fast',
      themes: ['fruta', 'nome', 'carro', 'casa']
    },
    {
      id: '6007',
      players: 0,
      isPrivate: true,
      currentRound: 0,
      totalRounds: 20,
      speed: 'fast',
      themes: ['fruta', 'nome', 'carro', 'casa']
    },
    {
      id: '3008',
      players: 10,
      isPrivate: true,
      currentRound: 0,
      totalRounds: 20,
      speed: 'fast',
      themes: ['fruta', 'nome', 'carro', 'casa']
    },
    {
      id: '3009',
      players: 0,
      isPrivate: true,
      currentRound: 0,
      totalRounds: 20,
      speed: 'fast',
      themes: ['fruta', 'nome', 'carro', 'casa']
    },
    {
      id: '3010',
      players: 0,
      isPrivate: true,
      currentRound: 0,
      totalRounds: 20,
      speed: 'fast',
      themes: ['fruta', 'nome', 'carro', 'casa']
    },
    {
      id: '6011',
      players: 0,
      isPrivate: true,
      currentRound: 0,
      totalRounds: 20,
      speed: 'fast',
      themes: ['fruta', 'nome', 'carro', 'casa']
    },
    {
      id: '3012',
      players: 10,
      isPrivate: true,
      currentRound: 0,
      totalRounds: 20,
      speed: 'fast',
      themes: ['fruta', 'nome', 'carro', 'casa']
    },
    {
      id: '3013',
      players: 0,
      isPrivate: true,
      currentRound: 0,
      totalRounds: 20,
      speed: 'fast',
      themes: ['fruta', 'nome', 'carro', 'casa']
    },
    {
      id: '3014',
      players: 0,
      isPrivate: true,
      currentRound: 0,
      totalRounds: 20,
      speed: 'fast',
      themes: ['fruta', 'nome', 'carro', 'casa']
    },
    {
      id: '6015',
      players: 0,
      isPrivate: true,
      currentRound: 0,
      totalRounds: 20,
      speed: 'fast',
      themes: ['fruta', 'nome', 'carro', 'casa']
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

  return { rooms, setRooms };
}

export default useRooms;
