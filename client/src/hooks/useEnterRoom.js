
async function useEnterRoom({ id }) {
  // const res = await api.enterRoom({id, password});

  return {
    room: {
      id,
    },
    errors: false,
  };
}

export default useEnterRoom;
