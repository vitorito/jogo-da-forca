async function useRoom(roomId) {
  // const res = await api.fetchRoom(roomId);
  // return { room: res.data };
  return {
    id: roomId,
    isPrivate: true,
    currentRound: 1,
    totalRounds: 20,
    speed: 'fast',
    themes: ['fruta', 'nome', 'carro', 'casa', 'kkskskkskkskkskskkkeelf alflalflawlwallwallwalw', 'foeflflsfas', 'kka', 'lfapwoawslaslsa',
      'fasçfasfçwlw', 'skffçslfsçfsf', 'lefpeepfwfsf', 'çflfsçflsçfsf çlfalsamas salasaslçlas',
      'alaçslfasflçasfl lfasfçsafmaslçf aslfasfsalçflasf laçfaslfsfç', 'fslfsfksfkskf', 'salçsalçasl', 'fsçfsflsfçsf', 'ksasalsalaslas', 'skasaksakask',
      'saçlsalas', 'kakaskkask', 'saçsalçasçlas', 'aslçaslçaslasças', 'asçalcxçclçwwaw', 'ckclkccksk', 'saaslkasakas', 'jasjsjasjjsajs'],
    players: [
      {
        id: 1,
        nick: 'jao',
        points: 20,
      },
      {
        id: 2,
        nick: 'marcus',
        points: 30,
      },
      {
        id: 3,
        nick: 'antonio',
        points: 35,
      },
      {
        id: 10,
        nick: 'melao',
        points: 86,
      },
      {
        id: 20,
        nick: 'carlos',
        points: 13,
      },
      {
        id: 30,
        nick: 'juan',
        points: 13,
      },
      {
        id: 11,
        nick: 'maria',
        points: 6,
      },
      {
        id: 21,
        nick: 'morfeu',
        points: 5,
      },
      {
        id: 31,
        nick: 'cleber',
        points: 96,
      },
      {
        id: 100,
        nick: 'marcia',
        points: 86,
      },
      {
        id: 200,
        nick: 'Stackz',
        points: 13,
      },
      {
        id: 300,
        nick: 'LEPRECHAU',
        points: 13,
      },
      {
        id: 110,
        nick: 'GodZin',
        points: 6,
      },
      {
        id: 210,
        nick: 'JaMbAu',
        points: 5,
      },
      {
        id: 301,
        nick: 'ZHAZaan',
        points: 96,
      },
    ]
  };
}

export default useRoom;
