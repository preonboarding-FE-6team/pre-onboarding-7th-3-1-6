import React from 'react';
import styled from 'styled-components';

type Props = {
  suggestionName: string;
  query: string;
};

function ParsedName({ suggestionName, query }: Props) {
  const splitList = suggestionName.split(new RegExp(`(${query})`));

  return (
    <>
      {splitList.map((word) => (
        <React.Fragment key={word}> {word === query ? <Bold>{query}</Bold> : <div>{word}</div>}</React.Fragment>
      ))}
    </>
  );
}

export default ParsedName;

const Bold = styled.b`
  font-weight: 700;
`;
