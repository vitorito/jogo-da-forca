import React from 'react';

// eslint-disable-next-line react/prop-types
function ScrollableContainer({ children, className }) {
  return (
    <div
      className={`flex flex-col justify-center w-full grow rounded overflow-auto
      px-2 shadow shadow-black ${className}`}
    >
      <div className="max-h-[96%] h-[96%] overflow-auto">{children}</div>
    </div>
  );
}

export default ScrollableContainer;