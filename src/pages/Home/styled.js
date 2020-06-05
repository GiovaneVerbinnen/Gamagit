import styled from 'styled-components';


export const HomeContainer = styled.div`
    display: flex;
    flex-directon: column;
    align-itens: center;
    justify-content: center;
    height: 100vh;
`;


export const Content = styled.div`
    width:100vw;
    display: flex;
    align-itens: center;
    justify-content: center;
`;

export const Input = styled.input` 
    border:none;
    outline: 1px solid #333;   
    height: 40px;
    padding: 0 .5rem;
    border-radius: .3rem 0 0 .3rem;

    &:focus,
    &:active {
        outline:none;
        box-shadow:none;
    }

`;
export const Button = styled.button` 
    border: 1px solid #333;
    height: 42px;
    background: #333;
    padding: 0 .5rem;
    color: #fff;
    border-radius: 0 .3rem .3rem 0;

    &:focus,
    &:active {
        outline:none;
        box-shadow:none;
    }
`;

export const ErrorMsg = styled.span`
    display: block;
    color: red;

`

