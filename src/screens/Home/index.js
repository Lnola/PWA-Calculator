import React, { useRef, useState } from 'react';

import Input from 'components/common/Input';
import Button from 'components/common/Button';
import { FlexMain, FlexSection, FlexArticle } from 'components/styled/Flex';

import buttons from 'constants/buttons';

const Home = () => {
  const [input, setInput] = useState('');
  const inputRef = useRef();

  return (
    <FlexMain width="100vw" height="100vh" direction="column">
      <Input input={input} setInput={setInput} inputRef={inputRef} />

      <FlexSection wrap="wrap" height="100%">
        {buttons(setInput, inputRef).map((row, index) => (
          <FlexArticle key={index} basis="100%" height={`${window.innerWidth / 5}px`}>
            {row.map(({ symbol, onClick, type }) => (
              <Button key={symbol} symbol={symbol} onClick={onClick} type={type} />
            ))}
          </FlexArticle>
        ))}
      </FlexSection>
    </FlexMain>
  );
};

export default Home;
