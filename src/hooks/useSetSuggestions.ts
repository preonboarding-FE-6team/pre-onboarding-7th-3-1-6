import { useRecoilCallback } from 'recoil';
import { getSuggestions } from '../api/suggestion';
import { searchInputState } from '../recoil/searchBar';
import { suggestionState } from '../recoil/suggestion';
import debounce from '../utils/debounce';
import sortTrialData from '../utils/sortTiralData';

type Option = {
  cacheTime: number;
};

function useSetSuggestions(option?: Option) {
  const { cacheTime = 5 * 60 * 1000 } = option ?? {};
  const handleSuggestionChange = useRecoilCallback(
    ({ snapshot, set, reset }) =>
      async () => {
        const inputValue = await snapshot.getPromise(searchInputState);

        if (!inputValue.trim()) {
          return;
        }

        const prevValue = await snapshot.getPromise(suggestionState(inputValue));

        if (prevValue) {
          return;
        }

      const { data, errorMsg } = await getSuggestions(inputValue);
        try {
          set(suggestionState(inputValue), data.sort(sortTrialData(inputValue)));
        } catch (err) {
          alert(errorMsg.default);
        }
        console.info('calling api');
      },
    []
  );

  return debounce(async () => {
    await handleSuggestionChange();
  }, 300);
}

export default useSetSuggestions;
