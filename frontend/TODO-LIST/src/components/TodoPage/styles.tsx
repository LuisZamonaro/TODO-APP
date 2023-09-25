import styled from "styled-components";

interface HeaderProps {
    mode?: boolean
}

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .teste {
        display: none;
    }

    span {
        display: inline-block;
        position: relative;
        height: 2em;
        width: 2em;
        background-color: transparent;
        border: 1px solid;
        border-radius: 100%;
        transition: all 0.7s;
    }

    span:after {
        content: "";
        position: absolute;
        border: solid hsl(220, 98%, 61%);
        border-width: 0 0.30em 0.30em 0;
        transform: rotate(45deg);
        width: 0.50em;
        height: 1em;
        left: 0.6em;
        top: 0.25em;
        opacity: 0;
    }

    label input:checked ~ span:after {
        opacity: 1;
    }

    @media(max-width: 610px) {
        span {
            height: 1.5em;
            width: 1.5em;
            height: 1.5em;
            width: 1.5em;
        }

        span:after {
            width: 0.35em;
            height: 0.7em;
            left: 0.35em;
            top: 0.15em;
        }
    }

    @media(max-width: 445px) {
        span {
            height: 1.25em;
            width: 1.25em;
        }

        span:after {
            width: 0.20em;
            height: 0.5em;
            left: 0.35em;
            top: 0.15em;
        }
    }
`

export const Header = styled.div<HeaderProps>`
    width: 100%;
    height: 100%;
    

    .backgDarkD {
        display: none;
        background-size: cover;
        width: 100%;
        display: ${({mode}) => mode ? 'none' : 'block'};
    }

    .backgLightD {
        width: 100%;
        background-size: cover;
        display: ${({mode}) => mode ? 'block' : 'none'};
    }

    .backgLightM {
        display: none;
    }

    .backgDarkM {
        display: none;
    }
    
    @media(max-width: 825px) {
        .backgDarkM {
            width: 100%;
            height: 200px;
        background-size: cover;
            display: ${({mode}) => mode ? 'none' : 'block'};
        }

        .backgDarkD {
            display: none;
        }

        .backgLightD {
            display: none;
        }

        .backgLightM {
            width: 100%;
            height: 200px;
        background-size: cover;
            display: ${({mode}) => mode ? 'block' : 'none'};
        }
    }   
`

export const Body = styled.div`
margin-top: -4px;
    width: 100%;
    
`