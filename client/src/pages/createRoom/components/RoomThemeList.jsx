import PropTypes from 'prop-types';
import { useRef } from 'react';
import RoomTheme from './RoomTheme';

function RoomThemeList({ roomData, setRoomData }) {
  const themeInputRef = useRef();
  const themesDivRef = useRef();

  function handleDeleteTheme(index) {
    setRoomData((prev) => {
      const themeList = [...prev.themeList];
      themeList.splice(index, 1);
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
    const themesDiv = themesDivRef.current;
    setTimeout(() => {
      themesDiv.scrollBy(0, themesDiv.scrollHeight);
    }, 10);
  }

  function handleAddTheme() {
    const theme = themeInputRef.current.value;

    if (theme === '') return;

    setRoomData((prev) => {
      const themeList = prev.themeList.filter((t) => t !== theme);
      themeList.push(theme);
      return {
        ...prev,
        themeList,
      };
    });

    cleanThemeInput();
    scrollThemesDiv();
  }

  return (
    <label htmlFor="theme-list" className="flex flex-col">
      <span>Lista de Temas</span>
      <div
        ref={themesDivRef}
        className="bg-white flex flex-wrap gap-2
          w-full h-[20vh] p-5 rounded-t overflow-auto scroll-smooth"
      >
        {roomData.themeList.map((theme, index) => (
          <RoomTheme
            value={theme}
            key={theme}
            onClick={() => handleDeleteTheme(index)}
          />
        ))}
      </div>
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
    themeList: PropTypes.arrayOf(PropTypes.string).isRequired,
    password: PropTypes.string,
  }).isRequired,
  setRoomData: PropTypes.func.isRequired,
};

export default RoomThemeList;
