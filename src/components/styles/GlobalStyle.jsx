// globalStyles.js
import { Global } from "@emotion/react";

const globalStyles = `
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    outline: none;
    border: none;
  }

  body {
    
    font-family: 'Roboto', sans-serif;
  }
`;

const GlobalStyles = () => <Global styles={globalStyles} />;

export default GlobalStyles;
