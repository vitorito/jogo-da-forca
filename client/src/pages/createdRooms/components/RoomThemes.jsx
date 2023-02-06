import PropTypes from 'prop-types';
import ScrollableContainer from '../../../components/ScrollableContainer';

function RoomThemes({ themes }) {
  return (
    <ScrollableContainer className="bg-yellow-700 mb-1">
      <ul className="flex flex-wrap content-start gap-2 h-full py-2 text-base">
        {themes.map((theme) => (
          <li key={theme} className="rounded-gray-bg w-fit px-2 py-0.5">
            {theme}
          </li>
        ))}
      </ul>
    </ScrollableContainer>
  );
}

RoomThemes.propTypes = {
  themes: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default RoomThemes;
