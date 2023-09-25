import styled from 'styled-components'

interface TodoListProps {
    mode?: boolean
}


export const Container = styled.div`
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);

    @media(max-width: 1600px) {
    top: 15%;
   }

   @media(max-width: 1360px) {
    top: 10%;
   }

   @media(max-width: 1140px) {
    top: 5%;
   }

   @media(max-width: 930px) {
    top: 1%;
   }
`

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const TodoAndStyleMode = styled.div<TodoListProps>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 670px;
    margin-bottom: 50px;

    .TODO {
        font-size: 35px;
        color: white;
        font-weight: 700;
        letter-spacing: 10px;
    }

    .iconSun {
        display: ${({mode}) => mode ? 'none' : 'block'};
        cursor: pointer;
    }

    .iconMoon {
        display: ${({mode}) => mode ? 'block' : 'none'};
        cursor: pointer;
    }

    @media(max-width: 825px) {
        width: 550px;
    }

    @media(max-width: 610px) {
        width: 450px;
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

    @media(max-width: 320px) {
        width: 270px;
    }
`

export const CreateNewTodo = styled.div<TodoListProps>`
    display: flex;
    align-items: center;
    width: 670px;
    margin-right: 28px;
    height: 50px;
    background-color: hsl(235, 24%, 19%);
    border-radius: 7px;
    gap: 20px;
    margin-bottom: 20px;
    background-color: ${({mode}) => mode ? 'hsl(0, 0%, 98%)' : 'hsl(235, 24%, 19%)'};


    .createNew {
        display: flex;
        align-items: center;
        color: hsl(234, 39%, 85%);
        font-family: 'Bellefair', serif;
        font-size: 15px;
        gap: 20px;
    }

    .inputCreate {
        background: transparent;
        border: none;
        outline: none;
        color: hsl(234, 39%, 85%);
    }

    input::placeholder,
    textarea::placeholder {
        color: hsl(234, 39%, 85%);
        color: ${({mode}) => mode ? 'hsl(236, 9%, 61%)' : 'hsl(236, 33%, 92%)'};
        font-weight: 700;
    }

    @media(max-width: 825px) {
        width: 550px;
        margin-right: 0px;
    }

    @media(max-width: 610px) {
        width: 450px;
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

    @media(max-width: 320px) {
        width: 270px;
    }
`

export const InputCheck = styled.div` //input.attrs({type: 'checkbox'})
    .teste {
        display: none;
    }

    span {
        display: inline-block;
        position: relative;
        height: 2em;
        width: 2em;
        background-color: transparent;
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

export const Chores = styled.div<TodoListProps>`
    max-height: 500px;
    width: 700px;
    overflow-y: scroll;
    border-radius: 8px;
    box-shadow: ${({mode}) => mode ? '0 0 10px rgba(0, 0, 0, 0.1)' : 'none'};

    @media(max-width: 912px) {
        width: 670px;
        margin-left: -28px;
    }

    @media(max-width: 825px) {
        width: 550px;
        margin-left: 0px;
    }

    @media(max-width: 610px) {
        width: 450px;
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

    @media(max-width: 320px) {
        width: 270px;
    }

`

export const TodoOptions = styled.div<TodoListProps>`
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