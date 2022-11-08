import React from 'react';

// eslint-disable-next-line react/prop-types
function HeanderItem({ children, isActive, onClick }) {
  return (
    <li
      className={`h-full border-2 rounded transition-colors duration-300 shadow-sm shadow-black ${
        isActive
          ? 'bg-yellow-700 border-black'
          : 'bg-yellow-600 lg:hover:bg-yellow-700 border-transparent'
      }`}
    >
      <button
        type="button"
        onClick={onClick}
        className="flex items-center justify-center h-full w-11 xsm:w-12 sm:w-14 px-2"
      >
        {children}
      </button>
    </li>
  );
}

export default HeanderItem;
