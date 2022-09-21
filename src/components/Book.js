import styled from "styled-components";
import Checkbox from "./Checkbox";

const StyledBook = styled.div`
    display: flex;
    gap: 20px;
`

const StyledSpan = styled.span`
    display: inline-block;
    min-width: 250px;
    text-align: center;
    transition: transform .2s;

    &:hover:first-of-type {
        background-color: #eee;
        border-radius: 3px;
        cursor: pointer;
    }

    &:active:first-of-type {
        transform: scale(0.95);
    }
`

export default function Book({ book }) {
    const { name, numberOfPages:pages, authors } = book;

    return (
        <StyledBook className="book">
            <Checkbox />
            <StyledSpan style={{textAlign: 'start' }}>Title: {name}</StyledSpan>
            <StyledSpan>Author: {authors}</StyledSpan>
            <StyledSpan>Pages: <span style={{display:"inline-block", minWidth:'40px', textAlign:'end'}}>{pages}</span></StyledSpan>
        </StyledBook>
    )
}