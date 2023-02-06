import React from 'react';
import PropTypes from 'prop-types'

function InfoItem({ title, info, icon }) {
  return (
    <div
      title={title}
      className="flex flex-col items-center w-24 p-1 border-2 border-black rounded"
    >
      <span>{title}</span>
      <div className="flex items-center justify-evenly w-full">
        {icon}
        <span>{info}</span>
      </div>
    </div>
  );
}

InfoItem.propTypes = {
  title: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
}

export default InfoItem;
