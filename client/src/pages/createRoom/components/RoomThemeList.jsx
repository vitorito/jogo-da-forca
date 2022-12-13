import PropTypes from 'prop-types';
import { useState } from 'react';
import ScrollableContainer from '../../../components/ScrollableContainer';
import gc from '../../../config/gameConstraints';
import RoomTheme from './RoomTheme';

function RoomThemeList({ roomData, setRoomData }) {
  const [theme, setTheme] = useState('');

  function handleDeleteTheme(index) {
    setRoomData((prev) => {
      const themes = [...prev.themes];
      themes.splice(index, 1);
      return {
        ...prev,
        themes,
      };
    });
  }

  function handleAddTheme(e) {
    e.preventDefault();

    setRoomData((prev) => {
      const themes = prev.themes.filter((t) => t !== theme);
      themes.push(theme);
      return {
        ...prev,
        themes,
      };
    });

    setTheme('');
  }

  return (
    <div className="flex flex-col overflow-auto">
      <span>Lista de Temas (Máx: 20)</span>
      <ScrollableContainer className="bg-white shadow-none h-[18vh] rounded-t rounded-b-none">
        <ul id="themes" className="flex flex-wrap gap-2 py-1">
          {roomData.themes.map((t, index) => (
            <RoomTheme
              value={t}
              key={t}
              onClick={() => handleDeleteTheme(index)}
            />
          ))}
        </ul>
      </ScrollableContainer>
      <form className="flex" onSubmit={handleAddTheme}>
        <input
          type="text"
          maxLength={gc.MAX_ROOM_THEME_LENGTH}
          placeholder="Adicionar tema"
          autoComplete="off"
          value={theme}
          onChange={(e) => setTheme(e.target.value.trim())}
          className="input text-xl font-normal rounded-t-none rounded-r-none
          border-2 border-t-blue-600"
        />
        <button
          type="submit"
          disabled={
            roomData.themes.length >= gc.MAX_ROOM_THEMES || theme === ''
          }
          className="btn flex items-center justify-center font-mono text-4xl
            w-12 h-10 sm:h-12 rounded-t-none rounded-l-none overflow-hidden"
        >
          +
        </button>
      </form>
    </div>
  );
}

RoomThemeList.propTypes = {
  roomData: PropTypes.shape({
    rounds: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    speed: PropTypes.oneOf(['lazy', 'medium', 'fast']),
    themes: PropTypes.arrayOf(PropTypes.string).isRequired,
    password: PropTypes.string,
  }).isRequired,
  setRoomData: PropTypes.func.isRequired,
};

export default RoomThemeList;
