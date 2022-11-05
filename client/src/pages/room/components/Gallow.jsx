import React from 'react';
import RopeIcon from '../../../components/RopeIcon';
import BodyDrawing from './BodyDrawing';

function Gallow() {
  return (
    <div className="relative z-10">
      <div className="bg-yellow-700 w-44 h-6 ml-2 rounded shadow shadow-black/70" />
      <div className="bg-yellow-900 w-20 h-3 absolute left-1/4 rotate-[-35deg] z-[-1]" />
      <RopeIcon className="w-10 absolute right-[16%] fill-slate-900" />
      <BodyDrawing className='' />
      <div className="bg-yellow-700 w-8 h-48 ml-9 shadow shadow-black" />
      <div className="bg-yellow-900 w-52 h-4 rounded shadow-md shadow-black/70" />
    </div>
  );
}

export default Gallow;
