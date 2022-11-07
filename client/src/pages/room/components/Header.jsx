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
    <div className="w-full max-w-xs sm:max-w-sm py-1 xsm:py-2 mb-2 border-2 border-black rounded">
      <ul className="flex items-center justify-evenly w-full h-11 xsm:h-12">
        <HeanderItem
          isActive={activeScreen === HEADER_BUTTONS.ranking}
          onClick={() => setActiveScreen(HEADER_BUTTONS.ranking)}
        >
          <BsTrophy title="Ranking" className="w-full h-full" />
        </HeanderItem>
        <div title="Partida" className='h-full'>
          <HeanderItem
            isActive={activeScreen === HEADER_BUTTONS.match}
            onClick={() => setActiveScreen(HEADER_BUTTONS.match)}
          >
            <RopeIcon />
          </HeanderItem>
        </div>
        <HeanderItem
          isActive={activeScreen === HEADER_BUTTONS.info}
          onClick={() => setActiveScreen(HEADER_BUTTONS.info)}
        >
          <BsExclamationCircle title="Info" className="w-full h-full" />
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
