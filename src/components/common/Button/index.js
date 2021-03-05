import React from 'react';

import { FlexSpan } from 'components/styled/Flex';
import { ButtonCss } from './index.styled';

const Button = ({ symbol, onClick }) => {
  return (
    <FlexSpan justifyContent="center" alignItems="center" basis="20%" css={ButtonCss} onClick={onClick}>
      {symbol}
    </FlexSpan>
  );
};

export default Button;
