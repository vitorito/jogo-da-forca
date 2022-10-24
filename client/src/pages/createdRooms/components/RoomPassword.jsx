import PropTypes from 'prop-types';
import gc from '../../../config/gameConstraints';

function RoomPassword({ value, setValue }) {
  function handleChange(e) {
    const newPassword = e.target.value;
    setValue(newPassword);
  }

  return (
    <label htmlFor="password">
      Senha
      <input
        type="password"
        id="password"
        placeholder="4 Dígitos..."
        maxLength={gc.ROOM_PASSWORD_LENGTH}
        value={value}
        onChange={handleChange}
        className="block w-full px-2 placeholder:text-black placeholder:text-base
      border-b border-gray-900 outline-none rounded"
      />
    </label>
  );
}

RoomPassword.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
};

export default RoomPassword;
