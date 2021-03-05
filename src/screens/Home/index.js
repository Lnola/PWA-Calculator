import React, { useEffect, useState } from 'react';

import Input from 'components/common/Input';
import Button from 'components/common/Button';
import { FlexMain, FlexSection, FlexArticle } from 'components/styled/Flex';

import buttons from 'constants/buttons';

const Home = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState();

  useEffect(() => {
    console.log(result);
  }, [result]);

  return (
    <FlexMain width="100vw" height="100vh" direction="column">
      <Input input={input} />

      <FlexSection wrap="wrap" height="100%">
        {buttons(setInput, input, setResult).map((row, index) => (
          <FlexArticle key={index} basis="100%" height={`${window.innerWidth / 4}px`}>
            {row.map(({ symbol, onClick }) => (
              <Button key={symbol} symbol={symbol} onClick={onClick} />
            ))}
          </FlexArticle>
        ))}
      </FlexSection>
    </FlexMain>
  );
};

export default Home;
