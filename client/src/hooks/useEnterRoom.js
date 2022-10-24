
async function useEnterRoom({ id }) {
  // const res = await api.enterRoom({id, password});

  return {
    id,
    errors: true,
  };
}

export default useEnterRoom;
