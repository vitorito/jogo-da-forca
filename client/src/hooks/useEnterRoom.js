function useEnterRoom() {
  // const res = await api.enterRoom({id, password});
  // eslint-disable-next-line no-unused-vars
  async function enterRoom({ id, password }) {
    return {
      room: {
        id,
      },
      errors: false,
    };
  }

  return enterRoom;
}

export default useEnterRoom;
