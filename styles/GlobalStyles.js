import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${({theme}) => theme.fonts.primary};
    font-size: ${({theme}) => theme.fonts.sizes.base}px;
  }

  h1,
  h2,
  h3 {
    margin: 0;
  }

  h1 {
    font-size: ${({theme}) => theme.fonts.sizes.h1}px;
  }
`