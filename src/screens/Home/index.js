import React from 'react';

import Input from 'components/common/Input';
import Button from 'components/common/Button';
import { FlexMain, FlexSection, FlexArticle } from 'components/styled/Flex';

const Home = () => {
  const tempArray = [
    ['CLR', 'DEL', '%', '/'],
    ['7', '8', '9', '*'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    [' ', '0', '.', '='],
  ];

  return (
    <FlexMain width="100vw" height="100vh" direction="column">
      <Input />

      <FlexSection wrap="wrap" height="100%">
        {tempArray.map((row, index) => (
          <FlexArticle key={index} basis="100%" height={`${window.innerWidth / 4}px`}>
            {row.map((symbol, index) => (
              <Button key={index} symbol={symbol} />
            ))}
          </FlexArticle>
        ))}
      </FlexSection>
    </FlexMain>
  );
};

export default Home;
