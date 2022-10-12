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
        <span className="block text-lg">Apelido</span>
        <input
          id="nick"
          type="text"
          value={nick.value}
          onChange={handleNickChange}
          maxLength={20}
          spellCheck="false"
          className="input"
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
        <span className="ml-1 pt-0 font-light">Lembrar Apelido</span>
      </label>
    </form>
  );
}

export default HomeForm;
