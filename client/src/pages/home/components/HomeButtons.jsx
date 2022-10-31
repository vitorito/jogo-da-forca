import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function HomeButtons({ disabled }) {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <button type="button" disabled={disabled} className="btn">
        <Link to="/rooms">Jogar</Link>
      </button>
      <button type="button" disabled={disabled} className="btn">
        <Link to="/room/create">Criar Sala</Link>
      </button>
    </div>
  );
}

HomeButtons.propTypes = {
  disabled: PropTypes.bool.isRequired,
};

export default HomeButtons;
