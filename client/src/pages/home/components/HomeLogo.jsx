/* eslint-disable no-octal-escape */
import React from 'react';

function HomeLogo() {
  return (
    <div className="w-fit self-center">
      <h1
        className="relative text-white text-6xl sm:text-7xl font-bold font-bangers tracking-[10px]
      after:block after:content-['F\00a0\00a0rca'] after:text-center after:w-fit after:cursor-text
      before:block before:absolute before:bottom-[1%] before:left-[11%] sm:before:left-[10.5%]
      before:w-[60px] sm:before:w-[70px] before:h-[60px] sm:before:h-[70px]
      before:bg-[url('img/rope.png')] before:bg-no-repeat before:bg-cover text-shadow-md"
      >
        <span className="block text-center p-2">Jogo</span>
        <span className="block text-center p-2 pt-0">da</span>
        <span className="sr-only">Forca</span>
      </h1>
    </div>
  );
}

export default HomeLogo;
