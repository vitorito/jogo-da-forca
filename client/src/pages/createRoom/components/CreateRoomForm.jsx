import PropTypes from 'prop-types';
import gc from '../../../config/gameConstraints';

function CreateRoomForm({ roomData, setRoomData }) {
  function handleRoundsChange(e) {
    const rounds = validateRoundsNumber(e.target.value);

    setRoomData((prev) => ({
      ...prev,
      rounds,
    }));
  }

  function handlePasswordChange(e) {
    const password = e.target.value;
    setRoomData((prev) => ({
      ...prev,
      password,
    }));
  }

  return (
    <form>
      <div className="flex items-center justify-between gap-2">
        <label htmlFor="rounds" className="w-1/2">
          <span>Rodadas</span>
          <input
            id="rounds"
            type="number"
            min={gc.MIN_MATCH_ROUNDS}
            max={gc.MAX_MATCH_ROUNDS}
            required
            placeholder={`Max: ${gc.MAX_MATCH_ROUNDS}`}
            value={roomData.rounds}
            onChange={handleRoundsChange}
            className="input placeholder:text-base"
          />
        </label>
        <label htmlFor="room-password" className='w-1/2'>
          <span className='whitespace-nowrap'>Senha (Opcional)</span>
          <input
            id="room-password"
            type="password"
            required
            autoComplete="off"
            maxLength={gc.ROOM_PASSWORD_LENGHT}
            placeholder={`${gc.ROOM_PASSWORD_LENGHT} Dígitos...`}
            value={roomData.password}
            onChange={handlePasswordChange}
            className="input placeholder:text-base"
          />
        </label>
      </div>
    </form>
  );
}

function validateRoundsNumber(rounds) {
  if (rounds > gc.MAX_MATCH_ROUNDS) {
    return '20';
  }
  if (rounds < gc.MIN_MATCH_ROUNDS) {
    return '';
  }
  return rounds;
}

CreateRoomForm.propTypes = {
  roomData: PropTypes.shape({
    rounds: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    themeList: PropTypes.arrayOf(PropTypes.string).isRequired,
    password: PropTypes.string,
  }).isRequired,
  setRoomData: PropTypes.func.isRequired,
};

export default CreateRoomForm;
