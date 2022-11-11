import styled from 'styled-components';
import useSuggestions from '../../hooks/useSuggestions';
import Suggestion from './Suggestion';

type Props = {
  suggestionListRef: React.RefObject<HTMLUListElement>;
};

function SuggestionList({ suggestionListRef }: Props) {
  const { inputValue, suggestions } = useSuggestions();

  if (!inputValue) {
    return null;
  }

  return (
    <Container>
      <Title>추천 검색어</Title>
      <List ref={suggestionListRef}>
        {suggestions?.length ? (
          suggestions.map(({ sickCd, sickNm }) => (
            <Suggestion key={sickCd} suggestionName={sickNm} inputValue={inputValue} />
          ))
        ) : (
          <NoResult tabIndex={0}>검색어 없음</NoResult>
        )}
      </List>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  overflow: hidden;
  top: calc(100% + 10px);
  left: 0;
  width: 100%;
  padding: 20px 0;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.color.WHITE};

  @media ${({ theme }) => theme.responsive.mobile} {
    height: 320px;
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;

    ::-webkit-scrollbar {
      display: none;
    }
  }
`;

const Title = styled.strong`
  padding-left: 20px;
  font-size: 12px;
  color: ${({ theme }) => theme.color.GRAY};
`;

const List = styled.ul`
  &::-webkit-scrollbar {
    display: none;
  }
  overflow-y: auto;
  max-height: 500px;
  margin-top: 10px;
`;

const NoResult = styled.li`
  ${({ theme }) => theme.mixin.flex('flex-start')}
  height: 40px;
  padding: 0 20px;
`;

export default SuggestionList;
