import PropTypes from 'prop-types';
import React from 'react';

function Container({ children, className }) {
  return (
    <div
      className={`bg-yellow-600 h-full p-4 mt-4 rounded-xl
      text-black text-lg font-medium shadow shadow-black
      border-2 border-black ${className}`}
    >
      {children}
    </div>
  );
}

Container.defaultProps = {
  children: '',
  className: '',
};

Container.propTypes = {
  children: PropTypes.any, // eslint-disable-line
  className: PropTypes.string,
};

export default Container;
