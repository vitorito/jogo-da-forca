import { random } from 'lodash';
import { createContext, useEffect, useMemo, useState } from 'react';
import store from 'store2';

export const NicknameContext = createContext(null);

const NICK_STORE_KEY = 'nickname';
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
  let nick = store.get(NICK_STORE_KEY);
  let remember = true;

  if (!nick) {
    nick = generateGuestNick();
    remember = false;
  }

  return {
    value: nick,
    remember,
  };
}

function saveNick(nick) {
  if (nick.remember) {
    store.set(NICK_STORE_KEY, nick.value);
  } else {
    store.remove(NICK_STORE_KEY);
  }
}

export default NicknameProvider;
