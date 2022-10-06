import styled from "styled-components";
import Checkbox from "./Checkbox";
import { StyledSpan } from "./_styled";

const StyledBook = styled.div`
    display: flex;
    gap: 20px;
`

export default function Book({ book, status, showBookDetails, onChecked }) {
    const { name, numberOfPages: pages, authors, stock } = book;

    const handleOnChecked = (checked) => {

        if (onChecked) {
            onChecked(checked, book);
        }
    }

    const handleOnClick = () => {
        if (showBookDetails) {
            showBookDetails(book);
        }
    }

    return (
        <StyledBook className="book">
            <Checkbox stock={stock} status={status} onClick={handleOnChecked} />
            <StyledSpan style={{ textAlign: 'start' }} onClick={handleOnClick} >{name}</StyledSpan>
            <StyledSpan>Author: {authors}</StyledSpan>
            <StyledSpan style={{ display: "inline-block", minWidth: '100px' }}>Pages:
                <span style={{ display: "inline-block", minWidth: '40px', textAlign: 'end' }}>{pages}</span>
            </StyledSpan>
            <StyledSpan style={{ display: "inline-block", minWidth: '100px' }}>Stock:
                <span style={{ display: "inline-block", minWidth: '10px', textAlign: 'end' }}>{stock}</span>
            </StyledSpan>
        </StyledBook>
    )
}