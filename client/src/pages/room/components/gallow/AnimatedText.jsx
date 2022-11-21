/* eslint-disable react/no-array-index-key */
import PropTypes from 'prop-types';
import React from 'react';

function AnimatedText({ text }) {
  return (
    <span className="page-title">
      {text.split(' ').map((word, wordIndex) => (
        <div key={wordIndex}>
          {word.split('').map((letter, letterIndex) => (
            <span
              style={{
                animationDelay: `${wordIndex * 50 + letterIndex * 75}ms`,
              }}
              key={letterIndex}
              className="inline-block animate-bounce"
            >
              {letter}
            </span>
          ))}
        </div>
      ))}
    </span>
  );
}

AnimatedText.propTypes = {
  text: PropTypes.string.isRequired,
};

export default AnimatedText;
