import { css, keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const ButtonCss = css`
  border: 2px solid ${({ theme }) => theme.background};
  border-radius: 20%;
  box-sizing: border-box;
  font-size: 1.5rem;
  animation: ${rotate} 0.2s ease-in-out;

  ${({ type, theme }) =>
    type === 'functional'
      ? `background-color: ${theme.background}; color: ${theme.light};`
      : `background-color: ${theme.background}; color: ${theme.highlight};`};
`;
