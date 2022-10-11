import React from 'react';
import useNickname from '../../../hooks/useNickname';

function HomeForm() {
  const [nick, setNick] = useNickname();

  function handleNickChange({ target }) {
    setNick((prev) => ({ ...prev, value: target.value }));
  }

  function handleRememberNickChange({ target }) {
    setNick((prev) => ({ ...prev, remember: target.checked }));
  }

  return (
    <form action="" className="p-1">
      <label htmlFor="nick">
        <span className="block">Apelido</span>
        <input
          id="nick"
          type="text"
          value={nick.value}
          onChange={handleNickChange}
          maxLength={20}
          spellCheck="false"
          className="block border-b-2 border-white font-medium px-2 pt-2 focus:outline-none text-2xl w-full font-mono rounded autofill:text-2xl"
        />
      </label>
      <label htmlFor="rememberNick" className="flex items-center gap-1 mt-2">
        <input
          id="rememberNick"
          type="checkbox"
          checked={nick.remember}
          onChange={handleRememberNickChange}
          className="rounded checked:accent-blue-700"
        />
        <small className="text-sm ml-1 pt-0 font-thin">Lembrar Apelido</small>
      </label>
    </form>
  );
}

export default HomeForm;
