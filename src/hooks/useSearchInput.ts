import React, { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { searchInputState } from '../recoil/searchBar';
import useSetSuggestions from './useSetSuggestions';

function useSearchInput() {
  const [inputState, setInputState] = useRecoilState(searchInputState);
  const setSuggestions = useSetSuggestions({ cacheTime: 2 * 60 * 1000 });

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;
    setInputState(value);
    setSuggestions();
  }, []);

  return { value: inputState, handleChange: handleInputChange };
}

export default useSearchInput;
