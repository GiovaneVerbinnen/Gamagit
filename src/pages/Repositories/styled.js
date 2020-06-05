import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    width:100%;
    max-width: 996px;
    margin 0 auto;
`

export const Title = styled.h1`
    font-family: Calibri, Arial, sans-serif;
    text-align: center;
    font-size: 3rem;
    font-weight: 700;
    color:#333;
    text-transform: uppercase;

`

export const List = styled.ul`
    list-style: none;
    padding:none;
    font-family: sans-serif;
`
export const ListIten = styled.li`
    font-family: Calibri, Arial, sans-serif;
    margin: .5rem 0;
    font-size: 1.3rem;
    background: #282a36;
    color: #FFF;
    padding: .5rem;
`

export const LinkHome = styled(Link)`
    display: block;
    width: 4rem;
    margin 2 auto;
    background-color: #6272a4;
    padding: .5rem 0;
    color: #fff;
    text-decoration: none;
    text-align: center;
    border-radius: 5px; 
`
