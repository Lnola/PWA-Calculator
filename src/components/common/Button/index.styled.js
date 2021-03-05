import { css } from 'styled-components';

export const ButtonCss = css`
  border: 2px solid ${({ theme }) => theme.background};
  border-radius: 20%;
  box-sizing: border-box;
  font-size: 1.5rem;

  ${({ type, theme }) =>
    type === 'functional'
      ? `background-color: ${theme.secondary}; color: ${theme.light};`
      : type === 'bonus'
      ? `background-color: ${theme.primary}; color: ${theme.secondary};`
      : type === 'normal'
      ? `background-color: ${theme.background}; color: ${theme.highlight};`
      : ''}
`;
