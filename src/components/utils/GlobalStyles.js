import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Work Sans", sans-serif;
    color: #000;
    overflow-x: hidden;
    }

    *::selection {
    color: white;
    background-color: #105bd8;
    }
`;

export default GlobalStyles;
