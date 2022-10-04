import { useState } from 'react';

function useNickname() {
  const [nick, setNick] = useState('');
  return [nick, setNick];
}

export default useNickname;
