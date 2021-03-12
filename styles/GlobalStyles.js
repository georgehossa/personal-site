import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${({theme}) => theme.fonts.primary};
  }
  h1 {
    font-size: ${({theme}) => theme.fonts.sizes.h1}px;
  }
`