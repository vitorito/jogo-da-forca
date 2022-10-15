import React from 'react';

function RopeBackground() {
  return (
    <div className="absolute top-0 left-0 w-screen h-screen overflow-hidden z-[-1]">
      <div className="absolute top-0 left-0 bg-yellow-600 bg-[url('img/rope.png')] bg-repeat min-w-[200%] min-h-[300%] rotate-[-45deg] origin-left" />
    </div>
  );
}

export default RopeBackground;
