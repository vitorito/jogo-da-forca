import PropTypes from 'prop-types';
import gc from '../../../config/gameConstraints';

const MIN_ROUNDS_INPUT = 1;

function CreateRoomForm({ roomData, setRoomData }) {
  function handleRoundsChange(e) {
    const totalRounds = validateRoundsNumber(e.target.value);

    setRoomData((prev) => ({
      ...prev,
      totalRounds,
    }));
  }

  function handlePasswordChange(e) {
    const password = e.target.value.replace(/\s/g, '');
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
            min={MIN_ROUNDS_INPUT}
            max={gc.MAX_MATCH_ROUNDS}
            required
            placeholder={`Min: ${gc.MIN_MATCH_ROUNDS}  Máx: ${gc.MAX_MATCH_ROUNDS}`}
            value={roomData.totalRounds}
            onChange={handleRoundsChange}
            className="input placeholder:text-base"
          />
        </label>
        <label htmlFor="room-password" className="w-1/2">
          <span className="whitespace-nowrap">Senha (Opcional)</span>
          <input
            id="room-password"
            type="password"
            required
            autoComplete="off"
            maxLength={gc.ROOM_PASSWORD_LENGTH}
            placeholder={`${gc.ROOM_PASSWORD_LENGTH} Dígitos...`}
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
  if (rounds < MIN_ROUNDS_INPUT) {
    return '';
  }
  return rounds;
}

CreateRoomForm.propTypes = {
  roomData: PropTypes.shape({
    totalRounds: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    speed: PropTypes.oneOf(['lazy', 'medium', 'fast']),
    themes: PropTypes.arrayOf(PropTypes.string).isRequired,
    password: PropTypes.string,
  }).isRequired,
  setRoomData: PropTypes.func.isRequired,
};

export default CreateRoomForm;
