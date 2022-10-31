import PropTypes from 'prop-types';
import React from 'react';
import { BsExclamationCircle, BsTrophy } from 'react-icons/bs';
import RopeIcon from '../../../components/RopeIcon';
import HeanderItem from './HeanderItem';

export const HEADER_BUTTONS = {
  ranking: 0,
  match: 1,
  info: 2,
};

function Header({ activeScreen, setActiveScreen }) {
  return (
    <div className="w-full py-2 border-2 border-black rounded">
      <ul className="flex items-center justify-evenly w-full h-14">
        <HeanderItem
          isActive={activeScreen === HEADER_BUTTONS.ranking}
          onClick={() => setActiveScreen(HEADER_BUTTONS.ranking)}
        >
          <BsTrophy className="w-full h-full" />
        </HeanderItem>
        <HeanderItem
          isActive={activeScreen === HEADER_BUTTONS.match}
          onClick={() => setActiveScreen(HEADER_BUTTONS.match)}
        >
          <RopeIcon />
        </HeanderItem>
        <HeanderItem
          isActive={activeScreen === HEADER_BUTTONS.info}
          onClick={() => setActiveScreen(HEADER_BUTTONS.info)}
        >
          <BsExclamationCircle className="w-full h-full" />
        </HeanderItem>
      </ul>
    </div>
  );
}

Header.defaultProps = {
  activeScreen: HEADER_BUTTONS.match,
};

Header.propTypes = {
  activeScreen: PropTypes.oneOf([
    HEADER_BUTTONS.ranking,
    HEADER_BUTTONS.match,
    HEADER_BUTTONS.info,
  ]),
  setActiveScreen: PropTypes.func.isRequired,
};

export default Header;
