import { random } from 'lodash';
import { createContext, useEffect, useMemo, useState } from 'react';
import store from 'store2';

export const NicknameContext = createContext(null);

const GUEST_NICK_BASE = 'Anonimo';
const MIN_ID = 100;
const MAX_ID = 999;

// eslint-disable-next-line react/prop-types
function NicknameProvider({ children }) {
  const [nick, setNickname] = useState(loadNick());

  useEffect(() => {
    saveNick(nick);
  }, [nick]);

  function setNick(newValue) {
    setNickname((prev) => ({ ...prev, ...newValue }));
  }

  const value = useMemo(
    () => ({
      nick,
      setNick,
    }),
    [nick, setNick]
  );

  return (
    <NicknameContext.Provider value={value}>
      {children}
    </NicknameContext.Provider>
  );
}

function generateGuestNick() {
  const id = random(MIN_ID, MAX_ID, false);
  return GUEST_NICK_BASE + id;
}

function loadNick() {
  const nick = store.get('nick');
  if (nick?.remember) return nick;

  return {
    value: generateGuestNick(),
    remember: false,
  };
}

function saveNick(nick) {
  console.log('banana');
  if (nick.remember) {
    store.set('nick', nick);
  } else {
    store.remove('nick');
  }
}

export default NicknameProvider;
