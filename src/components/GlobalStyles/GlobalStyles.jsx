import { createGlobalStyle } from "styled-components";


const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    scroll-behavior: smooth;
    font-family: var(--font);
  }

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  
  li{
    list-style: none;
  }
`;

export default GlobalStyles;