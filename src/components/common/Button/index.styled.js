import { css } from 'styled-components';

export const ButtonCss = css`
  border: 2px solid ${({ theme }) => theme.background};
  border-radius: 20%;
  box-sizing: border-box;
  font-size: 1.5rem;

  ${({ type, theme }) =>
    type === 'functional'
      ? `background-color: ${theme.background}; color: ${theme.light};`
      : `background-color: ${theme.background}; color: ${theme.highlight};`}
`;
