import PropTypes from 'prop-types';
import React from 'react';
import ScrollableContainer from '../../../components/ScrollableContainer';

function RoomThemes({ themes }) {
  return (
    <ScrollableContainer className="bg-yellow-600 w-full max-w-xs sm:max-w-sm">
      <ul className="flex flex-wrap items-start gap-2 text-center overflow-auto">
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
