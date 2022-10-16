import PropTypes from 'prop-types';

function RoomTheme({ value, onClick }) {
  return (
    <div className="bg-blue-500 text-white text-lg whitespace-nowrap h-fit px-2 rounded">
      {value}
      <button type="button" onClick={onClick} className="pl-2">&#10005;</button>
    </div>
  );
}

RoomTheme.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default RoomTheme;
