import { useRef } from 'react';
import styled from 'styled-components';
import useInput from '../../hooks/useInput';
import Input from './Input';
import SuggestionList from './SuggestionList';
import ClearButton from './ClearButton';
import useClear from '../../hooks/useClear';
import useKeyboard from '../../hooks/useKeyboard';
import { ReactComponent as MagIcon } from '../../assets/icons/magnifier.svg';
import SearchButton from './SearchButton';
import useSuggestionFocus from '../../hooks/useSuggestionFocus';

function SearchBar() {
  const { searchInputRef, isFocused } = useInput();
  const suggestionListRef = useRef<HTMLUListElement>(null);
  const handleClear = useClear(searchInputRef);
  const { handleKeyDown } = useKeyboard(searchInputRef, suggestionListRef);
  const handleFocus = useSuggestionFocus(searchInputRef);

  return (
    <Container isFocused={isFocused} onKeyDown={handleKeyDown} onFocus={handleFocus} className="search-bar">
      <MagIcon />
      <Input searchInputRef={searchInputRef} />
      <SuggestionList suggestionListRef={suggestionListRef} />
      <ClearButton onClick={handleClear} />
      <SearchButton />
    </Container>
  );
}

const Container = styled.div<{ isFocused: boolean }>`
  ${({ theme }) => theme.mixin.flex('flex-start')}
  position: relative;
  width: 500px;
  height: 70px;
  padding: 0 10px 0 24px;
  border-radius: 60px;
  background-color: ${({ theme }) => theme.color.WHITE};
  ${({ isFocused, theme }) => (isFocused ? `outline: 2px solid ${theme.color.PRIMARY};` : '')}

  & > svg {
    width: 18px;
    height: 18px;
    margin-right: 12px;
    fill: ${({ theme }) => theme.color.GRAY};
  }

  @media ${({ theme }) => theme.responsive.mobile} {
    height: 48px;
    width: 320px;
  }
`;

export default SearchBar;
