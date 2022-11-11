import React from 'react';
import styled from 'styled-components';

type Props = {
  suggestionName: string;
  query: string;
};

function ParsedName({ suggestionName, query }: Props) {
  const splitList = suggestionName.split(new RegExp(`(${query})`, 'i'));
  let key = 0;

  return (
    <>
      {splitList.map((word) => (
        <React.Fragment key={`${key++}-${word}`}>
          {word.toLowerCase() === query.toLowerCase() ? <Bold>{word}</Bold> : <span>{word}</span>}
        </React.Fragment>
      ))}
    </>
  );
}

export default ParsedName;

const Bold = styled.b`
  font-weight: 700;
`;
