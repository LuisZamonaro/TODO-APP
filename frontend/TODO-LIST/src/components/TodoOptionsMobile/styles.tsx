import styled from 'styled-components'

interface TodoListProps {
    mode?: boolean
}


export const TodoOptionsMobile1 = styled.div`
    display: none;

    @media(max-width: 825px) {
        display: block;
    }

`


export const WrapperTodoOptionsMobile1 = styled.div<TodoListProps>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 550px;
    height: 50px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    padding-inline: 1rem;
    background-color: ${({mode}) => mode ? 'hsl(0, 0%, 98%)' : 'hsl(235, 24%, 19%)'};
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    margin-top: -3px;
    color: hsl(240, 0.4149377593360981%, 47.25490196078431%);


    @media(max-width: 610px) {
        width: 450px;
        font-size: 14px;
    }

    @media(max-width: 530px) {
        width: 400px;
    }

    @media(max-width: 445px) {
        width: 350px;
    }

    @media(max-width: 355px) {
        width: 300px;
    }

    @media(max-width: 355px) {
        width: 300px;
    }

    @media(max-width: 320px) {
        width: 270px;
    }
`

export const TodoOptionsMobile2 = styled.div`
    display: none;

    @media(max-width: 825px) {
        display: block;
    }

`

export const WrapperTodoOptionsMobile2 = styled.div<TodoListProps>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 550px;
    height: 50px;
    margin-top: 20px;
    border-radius: 8px;
    padding-inline: 5rem;
    background-color: ${({mode}) => mode ? 'hsl(0, 0%, 98%)' : 'hsl(235, 24%, 19%)'};
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    font-weight: 600;
    color: hsl(236, 9%, 61%);

    .active-button {
        color: hsl(220, 98%, 61%);
    }

    @media(max-width: 610px) {
        width: 450px;
        font-size: 14px;
        padding-inline: 3rem;
    }

    @media(max-width: 530px) {
        width: 400px;
    }

    @media(max-width: 445px) {
        width: 350px;
        padding-inline: 2.5rem;
    }

    @media(max-width: 355px) {
        width: 300px;
    }

    @media(max-width: 355px) {
        width: 300px;
        padding-inline: 2rem;
    }

    @media(max-width: 320px) {
        width: 270px;
    }
`