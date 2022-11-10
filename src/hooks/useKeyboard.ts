import { useEffect, useState } from 'react';

function useKeyboard(inputRef: React.RefObject<HTMLInputElement>, elRef: React.RefObject<HTMLElement>) {
  const [focusIndex, setFocusIndex] = useState<number>(-1);
  const ANCHOR_INDEX = 0;

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.nativeEvent.isComposing) return;

    switch (e.key) {
      case 'ArrowDown':
        setFocusIndex((cur) => {
          if (elRef.current?.childElementCount === cur + 1) return cur;
          return cur + 1;
        });
        break;
      case 'ArrowUp':
        setFocusIndex((cur) => {
          if (cur === 0) {
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

  return { handleKeyDown };
}

export default useKeyboard;
