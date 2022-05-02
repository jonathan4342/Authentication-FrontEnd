import { createGlobalStyle } from 'styled-components';


export const GlobalStyles = createGlobalStyle`

    html {
        box-sizing: border-box;
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }

    body{
        margin: 0;
        padding: 0;
        background-color: #333333;
    }

    * {
        margin: 0;
        padding: 0;
    }

`