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
        background-color: white;
    }

    * {
        margin: 0;
        padding: 0;
    }
    .rojo{
        color: red;
    }
`