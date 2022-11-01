import PropTypes from 'prop-types';
import { useRef, useState } from 'react';
import ScrollableContainer from '../../../components/ScrollableContainer';
import gc from '../../../config/gameConstraints';
import RoomTheme from './RoomTheme';

function RoomThemeList({ roomData, setRoomData }) {
  const [canAddTheme, setCanAddTheme] = useState(true);
  const themeInputRef = useRef();
  const themeListRef = useRef();

  function handleDeleteTheme(index) {
    setRoomData((prev) => {
      const themeList = [...prev.themeList];
      themeList.splice(index, 1);
      setCanAddTheme(themeList.length < gc.MAX_ROOM_THEMES);
      return {
        ...prev,
        themeList,
      };
    });
  }

  function cleanThemeInput() {
    const themeInput = themeInputRef.current;
    themeInput.value = '';
    themeInput.focus();
  }

  function scrollThemesDiv() {
    const themesDiv = themeListRef.current;
    setTimeout(() => {
      themesDiv.scrollBy(0, themesDiv.scrollHeight);
    }, 10);
  }

  function handleAddTheme() {
    const theme = themeInputRef.current.value.trim();

    if (!theme) return;

    setRoomData((prev) => {
      const themeList = prev.themeList.filter((t) => t !== theme);
      themeList.push(theme);
      setCanAddTheme(themeList.length < gc.MAX_ROOM_THEMES);
      return {
        ...prev,
        themeList,
      };
    });

    cleanThemeInput();
    scrollThemesDiv();
  }

  return (
    <label htmlFor="theme-list" className="flex flex-col overflow-auto">
      <span>Lista de Temas</span>
      <ScrollableContainer className="bg-white shadow-none h-[18vh] rounded-t">
        <ul ref={themeListRef} className="flex flex-wrap gap-2 py-1">
          {roomData.themeList.map((theme, index) => (
            <RoomTheme
              value={theme}
              key={theme}
              onClick={() => handleDeleteTheme(index)}
            />
          ))}
        </ul>
      </ScrollableContainer>
      <div className="flex">
        <input
          id="theme-list"
          type="text"
          ref={themeInputRef}
          maxLength={50}
          placeholder="Adicionar tema"
          autoComplete="off"
          className="input text-xl font-normal rounded-t-none rounded-r-none
            border-transparent border-t-2 focus:border-t-blue-600"
        />
        <button
          type="submit"
          disabled={!canAddTheme}
          onClick={handleAddTheme}
          className="btn flex items-center justify-center font-mono text-4xl
            w-12 h-10 sm:h-12 rounded-t-none rounded-l-none overflow-hidden"
        >
          +
        </button>
      </div>
    </label>
  );
}

RoomThemeList.propTypes = {
  roomData: PropTypes.shape({
    rounds: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    speed: PropTypes.oneOf(['lazy', 'medium', 'fast']),
    themeList: PropTypes.arrayOf(PropTypes.string).isRequired,
    password: PropTypes.string,
  }).isRequired,
  setRoomData: PropTypes.func.isRequired,
};

export default RoomThemeList;
