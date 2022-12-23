import React from 'react';
import { GiLaurelsTrophy } from 'react-icons/gi';

function Trophy() {
  return (
    <div
      className="flash overflow-hidden rounded-full relative
    after:bg-white/30 after:h-full after:w-2/5 after:absolute after:top-0"
    >
      <GiLaurelsTrophy size={100} className="fill-slate-900" />
    </div>
  );
}

export default Trophy;
