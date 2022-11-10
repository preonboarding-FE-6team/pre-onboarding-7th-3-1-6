import { useEffect, useState } from 'react';
import useSuggestions from './useSuggestions';

function useKeyboard(inputRef: React.RefObject<HTMLInputElement>, elRef: React.RefObject<HTMLElement>) {
  const { inputValue } = useSuggestions();
  const [focusIndex, setFocusIndex] = useState<number>(-1);
  const ANCHOR_INDEX = 0;

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.nativeEvent.isComposing) return;

    switch (e.key) {
      case 'Tab':
        setFocusIndex((cur) => {
          if (elRef.current?.childElementCount === cur + 1) return cur;
          e.preventDefault();
          return cur + 1;
        });
        break;

      case 'ArrowDown':
        setFocusIndex((cur) => {
          if (elRef.current?.childElementCount === cur + 1) return cur;
          return cur + 1;
        });
        break;
      case 'ArrowUp':
        setFocusIndex((cur) => {
          if (cur === 0 || cur === -1) {
            inputRef.current?.focus();
            return -1;
          }
          return cur - 1;
        });
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const focusedEl = elRef.current?.children[focusIndex]?.children[ANCHOR_INDEX] as HTMLElement | undefined;
    focusedEl?.focus();
  }, [focusIndex]);

  useEffect(() => {
    setFocusIndex(-1);
  }, [inputValue]);

  return { handleKeyDown };
}

export default useKeyboard;
