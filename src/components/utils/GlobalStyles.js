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

    ::-webkit-scrollbar {
        width: 10px;
    }
    
    ::-webkit-scrollbar-track {
        background-color: #1f1f1f;
    }
    
    ::-webkit-scrollbar-thumb {
        background-color: #4287f5;
        border-radius: 25px;
    }
    
    ::-webkit-scrollbar-thumb:hover {
        background-color: #4269f5;
    }
`;

export default GlobalStyles;
