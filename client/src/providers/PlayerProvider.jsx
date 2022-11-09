import { createContext, useMemo } from 'react';
import useNickname from '../hooks/useNickname';

export const PlayerContext = createContext(null);

// eslint-disable-next-line react/prop-types
function PlayerProvider({ children }) {
  const { nick, setNick } = useNickname();

  const value = useMemo(
    () => ({
      nick,
      setNick,
    }),
    [nick, setNick]
  );

  return (
    <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>
  );
}

export default PlayerProvider;
