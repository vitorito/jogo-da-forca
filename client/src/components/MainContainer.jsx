import React from 'react';

// eslint-disable-next-line react/prop-types
function MainContainer({ children, className }) {
  return (
    <div
      className="bg-yellow-600 flex items-center justify-center absolute top-0 left-0 w-screen h-screen overflow-hidden
      before:absolute before:left-[-50%] before:top-[50%] before:w-[300%] before:h-[300%]
      before:bg-[url('img/rope.png')] before:bg-repeat before:rotate-[-45deg] before:origin-left"
    >
      <div
        className={`bg-yellow-500 relative overflow-hidden flex flex-col items-center
        xl:border-4 xl:border-yellow-700 xl:rounded-[50px] shadow-md shadow-black/70
        py-6 xsm:py-10 sm:py-16 px-8 w-screen max-w-[1280px] h-screen xl:h-[90vh] xl:max-h-[900px] font-poppins ${className}`}
      >
        {children}
      </div>
    </div>
  );
}

export default MainContainer;
