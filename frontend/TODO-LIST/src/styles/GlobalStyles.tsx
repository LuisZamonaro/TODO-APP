import { createGlobalStyle } from "styled-components";

interface GlobalProps {
    mode? : boolean
}

export const GlobalStyles = createGlobalStyle<GlobalProps>`

/* @import url('https://fonts.googleapis.com/css2?family=Bellefair&family=Josefin+Sans:wght@400;700&display=swap'); */


    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Josefin Sans', sans-serif;
        background-color: hsl(235, 21%, 11%);
        min-height: 100vh;
        background-color: ${({mode}) => mode ? 'hsl(0, 0%, 98%)' : 'hsl(235, 21%, 11%)'};
    }
`