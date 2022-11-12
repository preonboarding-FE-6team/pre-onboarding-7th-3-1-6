import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { searchInputState } from '../recoil/searchBar';
import { suggestionState } from '../recoil/suggestion';

function useSuggestions() {
  const inputValue = useRecoilValue(searchInputState);
  const suggestionValue = useRecoilValue(suggestionState(inputValue));
  const [suggestions, setSuggestions] = useState<Sick[]>([]);

  useEffect(() => {
    if (suggestionValue) {
      setSuggestions(suggestionValue);
    }
  }, [suggestionValue]);

  return { inputValue, suggestions };
}

export default useSuggestions;
