import { useContext } from 'react';
import { MatchContext } from '../providers/MatchProvider';


function useGuessLetter() {
  const { setRoom } = useContext(MatchContext);

  async function guessLetter(key) {
    setRoom((prev) => {
      const { state } = prev.round;
      if (key === 'a') {
        const newWord = state.word.replaceAll('*', key);
        return {
          ...prev,
          round: {
            ...prev.round,
            state: {
              ...state,
              word: newWord,
              correctLetters: [...state.correctLetters, key],
            }
          }
        };
      }

      return {
        ...prev,
        round: {
          ...prev.round,
          state: {
            ...state,
            wrongLetters: [...state.wrongLetters, key],
          }
        }
      };
    }
    );
  }
  return guessLetter;
}

export default useGuessLetter;
