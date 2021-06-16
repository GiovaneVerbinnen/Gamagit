import styled from 'styled-components';


export const HomeContainer = styled.div`
    display: flex;
    flex-directon: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    flex-grow:1;
    flex-wrap:wrap;
`;


export const Content = styled.div`
    width:100vw;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Input = styled.input` 
    border:none;
    outline: 1px solid #0094ff;   
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
    border: 1px solid #0094ff;
    height: 42px;
    background: #0094ff;
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
    display: inline-block;
    color: red;

`

