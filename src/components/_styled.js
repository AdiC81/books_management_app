import styled, { css } from "styled-components";


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
        transform: translateY(1px);
    }
`

export const ReturnBtn = styled(Button)`
    transform: scale(0.5);
    transition: transform .1s;

    &:hover {
        transform: scale(0.9);
    }

    &:active {
        transform: scale(0.8);
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

export const StickyTitle = styled.div`
    position: sticky;
    display: flex;
    align-items: center;
    height: 280px;
    top: 0;
    z-index: 100;
    background-position: center;
    background-size: cover;
    transform: translateY(${props => props.titleTranslate}) scaleY(${props => props.isScrolled});
    transition: all .1s;
`

export const SwitchTitleLogo = styled(StickyTitle)`
    ${(props) => {
        switch (props.$mode) {
            case "A Game of Thrones":
                return css`
                    background-image: url("img/GOT_logo.jpg");
                `;
            case "A Clash of Kings":
                return css`
                    background-image: url("img/A_Clash_of_Kings.jpg");
                `;
            case "A Storm of Swords":
                return css`
                    background-image: url("img/A_Storm_of_Swords.jpg");
                    background-position: bottom;
                `;
            case "The Hedge Knight":
                return css`
                    background-image: url("img/The_Hedge_Knight.jpg");
                    background-position: top;
                    background-size: 80%;
                    background-repeat: no-repeat;
                `;
            case "A Feast for Crows":
                return css`
                    background-image: url("img/A_Feast_For_Crows.jpg");
                `;
            case "A Dance with Dragons":
                return css`
                    background-image: url("img/House-of-the-Dragon.jpg");
                    background-position: top;
                `;
            default:
                return css`
                    background-image: url("img/house_logo_3.jpeg");
                `;  
        }
    }}
`;