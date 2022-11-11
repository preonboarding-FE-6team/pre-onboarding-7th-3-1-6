import React from 'react';
import styled from 'styled-components';
import { ReactComponent as MagIcon } from '../../assets/icons/magnifier.svg';
import ParsedName from './ParsedName';

type Props = {
  suggestionName: string;
  inputValue: string;
};

function Suggestion({ suggestionName, inputValue }: Props) {
  return (
    <Container>
      <Link
        className="search-suggestion"
        href={`${process.env.REACT_APP_CLINICAL_TRIALS_KOREA}?conditions=${suggestionName}`}>
        <MagIcon />
        <div>
          <ParsedName suggestionName={suggestionName} query={inputValue} />
        </div>
      </Link>
    </Container>
  );
}

const Container = styled.li`
  & *:focus-visible {
    outline: none;
  }
`;

const Link = styled.a`
  ${({ theme }) => theme.mixin.flex('flex-start', 'center')}
  width: 100%;
  height: 50px;
  padding: 0 20px;
  user-select: none;
  cursor: pointer;

  > div {
    ${({ theme }) => theme.mixin.flex('flex-start', 'center')}
    width: 100%;
    height: 50px;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    word-wrap: break-word;
    line-height: 22px;
  }

  & > svg {
    flex-shrink: 0;
    width: 16px;
    height: 16px;
    margin-right: 16px;
  }

  &:hover,
  &:focus-visible,
  &.selected {
    background-color: ${({ theme }) => theme.color.GRAY_LIGHT};
  }
`;

export default React.memo(Suggestion);
