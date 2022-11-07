/* eslint-disable react/no-array-index-key */
import React from 'react';

const KEYS = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
];

function Keyboard() {
  return (
    <div className="flex flex-col gap-1 w-full">
      {KEYS.map((line, index) => (
        <div
          key={index}
          className="flex justify-center flex-wrap gap-1 text-xl"
        >
          {line.map((key) => (
            <button
              type="button"
              key={key}
              className="bg-gray-100 flex items-center justify-center
              w-[8.5%] max-w-[2.2rem] h-8 rounded"
            >
              {key}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
