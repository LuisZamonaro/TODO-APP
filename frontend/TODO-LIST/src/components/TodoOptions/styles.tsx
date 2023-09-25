import styled from 'styled-components'

interface TodoListProps {
    mode?: boolean
}

export const Container = styled.div<TodoListProps>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 670px;
    height: 50px;
    background-color: hsl(235, 24%, 19%);
    margin-right: 28px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    padding-inline: 1.5rem;
    color: hsl(234, 11%, 52%);
    background-color: ${({mode}) => mode ? 'hsl(0, 0%, 98%)' : 'hsl(235, 24%, 19%)'};

    .active-button {
        color: hsl(220, 98%, 61%);
    }

    .left {

    }

    .center {
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .right {

    }

    @media(max-width: 825px) {
        display: none;
    }
`