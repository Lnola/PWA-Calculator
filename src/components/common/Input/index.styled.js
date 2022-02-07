import styled from 'styled-components';

export const StyledInput = styled.textarea`
  padding: 5%;
  height: 100%;
  border: none;
  font-size: 2rem;
  font-family: inherit;
  background-color: transparent;
  color: ${({ theme }) => theme.light};
  letter-spacing: 2px;

  &:focus {
    outline: none;
  }
`;
