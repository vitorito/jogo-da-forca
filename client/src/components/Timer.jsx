import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { BsFillClockFill } from 'react-icons/bs';

function Timer({ endTime, totalTime, className }) {
  const [remainingTime, setRemainingTime] = useState(calcRemainingTimePercent);

  useEffect(() => {
    const id = setInterval(() => {
      setRemainingTime(calcRemainingTimePercent());
    }, 50);

    return () => clearInterval(id);
  }, [endTime, totalTime]);

  function calcRemainingTimePercent() {
    const timeToEnd = Math.max(endTime - Date.now(), 1);
    return Math.max(0, (timeToEnd / totalTime) * 100);
  }

  return (
    <div className={`flex items-center w-full max-w-sm ${className}`}>
      <span className="bg-white p-1.5 rounded-full">
        <BsFillClockFill size={40} className="fill-slate-900" />
      </span>
      <div className="w-full p-1.5 -ml-1.5 bg-white rounded-r-lg overflow-hidden">
        <span
          style={{
            width: `${remainingTime}%`,
          }}
          className="block bg-blue-600 rounded h-5 transition-all"
        />
      </div>
    </div>
  );
}

Timer.defaultProps = {
  className: '',
};

Timer.propTypes = {
  endTime: PropTypes.number.isRequired,
  totalTime: PropTypes.number.isRequired,
  className: PropTypes.string,
};

export default Timer;
