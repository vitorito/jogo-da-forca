import PropTypes from 'prop-types';
import { useContext } from 'react';
import gc from '../../../config/gameConstraints';
import { PlayerContext } from '../../../providers/PlayerProvider';

function HomeForm({ setIsValidNick }) {
  const { nick, setNick } = useContext(PlayerContext);

  function handleNickChange({ target }) {
    const value = target.value.trim();
    setNick({ value });
    const isValidNick = value.length > 0 && value.length <= gc.MAX_NICK_LENGTH;
    setIsValidNick(isValidNick);
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
          maxLength={gc.MAX_NICK_LENGTH}
          spellCheck="false"
          className="input"
        />
      </label>
      <label htmlFor="rememberNick" className="flex items-center w-fit mt-2">
        <input
          id="rememberNick"
          type="checkbox"
          checked={nick.remember}
          onChange={handleRememberNickChange}
          className="rounded checked:accent-blue-700"
        />
        <span className="ml-2 pt-0 font-light">Lembrar Apelido</span>
      </label>
    </form>
  );
}

HomeForm.propTypes = {
  setIsValidNick: PropTypes.func.isRequired,
};

export default HomeForm;
