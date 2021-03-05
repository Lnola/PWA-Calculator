import React from 'react';

import { FlexSpan } from 'components/styled/Flex';
import { ButtonCss } from './index.styled';

const Button = ({ symbol, onClick, type }) => {
  return (
    <FlexSpan justifyContent="center" alignItems="center" basis="20%" css={ButtonCss} onClick={onClick} type={type}>
      {symbol}
    </FlexSpan>
  );
};

export default Button;
