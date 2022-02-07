import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
  body {
    height: 100vh;
    font-family: "Roboto";
    overflow: hidden;
    background-color:${({ theme }) => theme.background};
    
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  textarea {
    resize: none;
  }
`;

export const theme = {
  background: '#181818',
  primary: '#313131',
  secondary: '#616061',
  highlight: '#6d6d6d',
  light: '#fcfcfc',
};
