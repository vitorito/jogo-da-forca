import PropTypes from 'prop-types';
import React from 'react';

function LoadingSpin({ className }) {
  return (
    <div
      className={`w-10 h-10 m-auto border-x-4 border-y-2 border-transparent
      border-x-black rounded-full animate-spin ${className}`}
    />
  );
}
LoadingSpin.defaultProps = {
  className: '',
};

LoadingSpin.propTypes = {
  className: PropTypes.string,
};

export default LoadingSpin;
