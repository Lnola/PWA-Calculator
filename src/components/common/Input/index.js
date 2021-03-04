import React from 'react';

import { StyledInput } from './index.styled';

const Input = ({ input }) => {
  return (
    <StyledInput
      type="text"
      value={input}
      onKeyDown={e => {
        e.preventDefault();
      }}
    />
  );
};

export default Input;
