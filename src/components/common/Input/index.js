import React from 'react';

import { StyledInput } from './index.styled';

const Input = ({ input, setInput, inputRef }) => {
  return (
    <StyledInput ref={inputRef} type="text" value={input} onChange={({ target }) => setInput(target.value)} readOnly />
  );
};

export default Input;
