import styled from "styled-components";
import Checkbox from "./Checkbox";
import { StyledSpan } from "./_styled";

const StyledBook = styled.div`
    display: flex;
    gap: 20px;
`

export default function Book({ book, showBookDetails }) {
    const { name, numberOfPages:pages, authors } = book;

    const handleOnClick = () => {
        if(showBookDetails) {
            showBookDetails(book);
        }
    }

    return (
        <StyledBook className="book">
            <Checkbox />
            <StyledSpan style={{textAlign: 'start' }} onClick={handleOnClick} >Title: {name}</StyledSpan>
            <StyledSpan>Author: {authors}</StyledSpan>
            <StyledSpan>Pages: <span style={{display:"inline-block", minWidth:'40px', textAlign:'end'}}>{pages}</span></StyledSpan>
        </StyledBook>
    )
}