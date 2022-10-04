import random from 'lodash/random';
import { useEffect, useState } from 'react';
import store from 'store2';

function generateGuestNick() {
  const base = 'Anonimo';
  const minId = 100;
  const maxId = 999;
  const id = random(minId, maxId, false);
  return base + id;
}

function loadNick() {
  const nick = store.get('nick');
  if (nick?.save) return nick;

  return {
    value: generateGuestNick(),
    save: false,
  };
}

function saveNick(nick) {
  store.set('nick', nick);
}

function useNickname() {
  const [nick, setNick] = useState(loadNick());

  useEffect(() => saveNick(nick), [nick]);

  return [nick, setNick];
}

export default useNickname;
