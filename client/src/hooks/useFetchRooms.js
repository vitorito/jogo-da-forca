import { useState } from 'react';

function useFetchRooms() {
  const [rooms, setRooms] = useState([
    {
      id: '3299',
    },
    {
      id: '3609',
    },
    {
      id: '3904',
    },
    {
      id: '6045',
    }
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

export default useFetchRooms;
