import styled from "styled-components";


export const StyledSpan = styled.span`
    display: inline-block;
    min-width: 250px;
    text-align: center;
    box-sizing: border-box;
    padding-left: 5px;
    transition: transform .3s;

    &:hover:first-of-type {
        background-color: #aaa;
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
    background-image: url("img/iron_throne.jpg");
    background-position: center;
    background-size: cover;
`

export const Button = styled.button`
    border: solid 1px #aaa;
    color: white;
    font-weight: bold;
    cursor: pointer;
    font-size: 1em;
    padding: 4px 6px;
    border-radius: 100%;
    height: 66px;
    width: 66px;
    font-family: 'Indie Flower', cursive;
    background-image: url("img/house_red_logo.jpg");
    background-position: center;
    background-size: contain;
    transition: transform .3s;


    &:hover {
        transform: scale(1.1);
    }

    &:active {
        background-color: #eee;
        transform: translateY(1px);
    }
`

export const Title = styled.h1`
    font-family: 'Griffy', cursive;
    margin-top: 0;
    margin-bottom: 0;
    text-align: center;
    font-size: 2.5em;
    padding: 30px;
    color: white;
`

export const Subtitle = styled.h3`
    text-align: center;
`

export const Header = styled.div`
    // background-color: yellowgreen;
    max-width: 1200px;
`