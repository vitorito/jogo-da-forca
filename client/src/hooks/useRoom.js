async function useRoom(roomId) {
  // const res = await api.fetchRoom(roomId);
  // return { room: res.data };
  return {
    id: roomId,
    users: [
      {
        name: 'jao'
      },
      {
        name: 'marcus'
      },
      {
        name: 'antonio'
      },
    ]
  };
}

export default useRoom;
