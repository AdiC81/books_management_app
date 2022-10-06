import styled from "styled-components";


export const StyledSpan = styled.span`
    display: inline-block;
    min-width: 250px;
    text-align: center;
    box-sizing: border-box;
    padding-left: 5px;
    transition: transform .3s;

    &:hover:first-of-type {
        background-color: #eee;
        border-radius: 3px;
        transform: scale(1.05);
        cursor: pointer;
    }

    &:active:first-of-type {
        transform: scale(1);
    }
`

export const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const Button = styled.button`
    border: solid 1px #aaa;
    cursor: pointer;
    font-size: 1em;
    padding: 4px 6px;
    border-radius: 4px;
    max-width: fit-content;

    &:hover {
        background-color: #bbb;
    }

    &:active {
        background-color: #eee;
        transform: translateY(1px);
    }
`

export const Title = styled.h1`
    margin-top: 0;
    text-align: center;
    margin-bottom: 0;
    padding-bottom: 10px;
`

export const Subtitle = styled.h3`
    text-align: center;
`

export const Header = styled.div`
    background-color: yellowgreen;
    max-width: 1200px;
`