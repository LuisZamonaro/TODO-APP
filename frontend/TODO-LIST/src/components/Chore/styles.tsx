import styled from 'styled-components'

interface ChoreProps {
  mode?: boolean;
}

export const IndividualChore = styled.div<ChoreProps>`

    display: flex;
    align-items: center;
    width: 670px;
    height: 50px;
    background-color: hsl(235, 24%, 19%);
    font-weight: 500;
    gap: 20px;
    border-bottom: 1px solid hsl(234, 11%, 52%);
    color: hsl(234, 39%, 85%);
    background-color: ${({mode}) => mode ? 'hsl(0, 0%, 98%)' : 'hsl(235, 24%, 19%)'};
    border-bottom: 1px solid ${({mode}) => mode ? 'hsl(236, 9%, 61%)' : 'hsl(236, 9%, 61%)'};
    color: ${({mode}) => mode ? 'hsl(235, 24%, 19%)' : 'hsl(236, 33%, 92%)'};

    .iconDelete {
    position: absolute;
    right: 10px;
    display: none;
  }

    @media(max-width: 825px) {
        width: 550px;
        margin-right: 0px;

        .iconDelete {
            display: block;
            width: 13px;
        }
    }

    @media(max-width: 610px) {
        width: 450px;
        font-size: 14px;
        gap: 15px;
    }

    @media(max-width: 530px) {
        width: 400px;
        font-size: 13px;
    }

    @media(max-width: 445px) {
        width: 350px;
        font-size: 12px;
        gap: 10px;

        .iconDelete {
            width: 10px;
        }
    }

    @media(max-width: 355px) {
        width: 300px;
        font-size: 11px;
        gap: 5px;
    }
    
    @media(max-width: 320px) {
        width: 270px;
        font-size: 9px;
    }
`

export const InputCheck = styled.div` // input.attrs({type: 'checkbox'})

    .teste {
        display: none;
    }

    span {
        display: inline-block;
        position: relative;
        height: 2em;
        width: 2em;
        background-color: black;
        border-radius: 100%;
        transition: all 0.7s;
    }

    span:after {
        content: "";
        position: absolute;
        border: solid white;
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

    &:checked {
    background-color: #007bff;
    border-color: #007bff;
    border-radius: 50%; 
  }

`