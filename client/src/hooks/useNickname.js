import { random } from 'lodash';
import { useEffect, useState } from 'react';
import store from 'store2';


const NICK_STORE_KEY = 'nickname';
const GUEST_NICK_BASE = 'Anonimo';
const MIN_ID = 100;
const MAX_ID = 999;

function useNickname() {
  const [nick, setNickname] = useState(loadNick);

  useEffect(() => {
    saveNick(nick);
  }, [nick]);

  function setNick(newValue) {
    setNickname((prev) => ({ ...prev, ...newValue }));
  }

  return { nick, setNick };
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

export default useNickname;
