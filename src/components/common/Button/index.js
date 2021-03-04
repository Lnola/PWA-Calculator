import React from 'react';

import { FlexSpan } from 'components/styled/Flex';
import { ButtonCss } from './index.styled';

const Button = ({ symbol }) => {
  return (
    <FlexSpan justifyContent="center" alignItems="center" basis="25%" css={ButtonCss}>
      {symbol}
    </FlexSpan>
  );
};

export default Button;
