/* eslint-disable jsx-a11y/no-autofocus */
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import gc from '../../../../config/gameConstraints';
import chooseWord from '../../../../socket/chooseWord';

function WordChoosing({ theme }) {
  const [word, setWord] = useState('');

  function handleWordSubmit(e) {
    e.preventDefault();
    chooseWord(word);
  }

  return (
    <div className="sm-container items-center justify-around grow">
      <p className="sm:text-xl">
        Escolha uma palavra com o tema
        <span className="page-title text-5xl sm:text-6xl block mt-2 sm:mt-6">
          {theme}
        </span>
      </p>
      <form onSubmit={handleWordSubmit}>
        <label htmlFor="word" className="block text-center sm:text-left">
          Min: {gc.MIN_WORD_LENGTH}, Máx: {gc.MAX_WORD_LENGTH} caracteres
          <input
            id="word"
            type="text"
            className="input text-center"
            value={word}
            minLength={gc.MIN_WORD_LENGTH}
            maxLength={gc.MAX_WORD_LENGTH}
            placeholder={`Entre ${gc.MIN_WORD_LENGTH} e ${gc.MAX_WORD_LENGTH} caracteres`}
            onChange={(e) => setWord(e.target.value.trim())}
          />
        </label>
        <button
          type="submit"
          disabled={word.length < gc.MIN_WORD_LENGTH}
          className="btn mt-3 sm:mt-4"
        >
          Escolher Palavra
        </button>
      </form>
    </div>
  );
}

WordChoosing.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default WordChoosing;
