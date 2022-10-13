import { useContext } from 'react';
import { NicknameContext } from '../../../providers/NicknameProvider';

function HomeForm() {
  const { nick, setNick } = useContext(NicknameContext);

  function handleNickChange({ target }) {
    setNick({ value: target.value.trim() });
  }

  function handleRememberNickChange({ target }) {
    setNick({ remember: target.checked });
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
