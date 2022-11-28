import PropTypes from 'prop-types';
import gc from '../../../config/gameConstraints';

function RoomPassword({ value, setValue }) {
  function handleChange(e) {
    const newPassword = e.target.value;
    setValue(newPassword);
  }

  return (
    
  );
}

RoomPassword.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
};

export default RoomPassword;
