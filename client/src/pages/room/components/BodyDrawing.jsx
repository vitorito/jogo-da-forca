import PropTypes from 'prop-types';
import React from 'react';

const HEAD = (
  <div
    key="head"
    className="bg-black w-10 h-10 absolute top-4 right-[16%]
    border-2 border-black rounded-full"
  />
);
const CHEST = (
  <div key="chest" className="bg-black w-2 h-14 absolute top-12 right-1/4" />
);
const LEFT_ARM = (
  <div
    key="left-arm"
    className="bg-black w-10 h-2
    absolute top-14 right-[24.5%] rotate-[-45deg] origin-bottom-right rounded"
  />
);
const RIGHT_ARM = (
  <div
    key="right-arm"
    className="bg-black w-10 h-2
    absolute top-14 right-[7%] rotate-45 origin-bottom-left rounded"
  />
);
const LEFT_LEG = (
  <div
    key="left-leg"
    className="bg-black w-12 h-2 absolute top-24 right-[25%]
    rotate-[-60deg] origin-bottom-right rounded-l"
  />
);
const RIGHT_LEG = (
  <div
    key="right-leg"
    className="bg-black w-12 h-2 absolute top-24 right-[2%]
    rotate-[60deg] origin-bottom-left rounded-r"
  />
);
const BODY_PARTS = [HEAD, CHEST, LEFT_ARM, RIGHT_ARM, LEFT_LEG, RIGHT_LEG];

function BodyDrawing({ className }) {
  const numberOfParts = 6;

  return (
    <div className={`relative ${className}`}>
      {BODY_PARTS.slice(0, numberOfParts)}
    </div>
  );
}

BodyDrawing.defaultProps = {
  className: '',
};

BodyDrawing.propTypes = {
  className: PropTypes.string,
};

export default BodyDrawing;
