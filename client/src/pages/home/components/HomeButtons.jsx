import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function HomeButtons({ disabled }) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <button
        type="button"
        disabled={disabled}
        onClick={() => navigate('/rooms')}
        className="btn"
      >
        Jogar
      </button>
      <button
        type="button"
        disabled={disabled}
        onClick={() => navigate('/room/create')}
        className="btn"
      >
        Criar Sala
      </button>
    </div>
  );
}

HomeButtons.propTypes = {
  disabled: PropTypes.bool.isRequired,
};

export default HomeButtons;
