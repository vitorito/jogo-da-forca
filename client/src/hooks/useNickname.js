import random from 'lodash/random';
import { useEffect, useState } from 'react';
import store from 'store2';

const GUEST_NICK_BASE = 'Anonimo';
const MIN_ID = 100;
const MAX_ID = 999;

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
  store.set('nick', nick);
}

function useNickname() {
  const [nick, setNick] = useState(loadNick());

  useEffect(() => saveNick(nick), [nick]);

  return [nick, setNick];
}

export default useNickname;
