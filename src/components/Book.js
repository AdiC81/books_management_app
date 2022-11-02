import styled from "styled-components";
import { useCurrentBook } from "../context/CurrentBookContext";
import Checkbox from "./Checkbox";
import { StyledSpan } from "./_styled";

const StyledBook = styled.div`
    display: flex;
    gap: 20px;
`

const StyledBookSpan = styled(StyledSpan)`
    color: white;
`

export default function Book({ book, status }) {
    const { name, numberOfPages: pages, authors, stock } = book;

    const {setBook} = useCurrentBook();

    return (
        <StyledBook className="book">
            <Checkbox book={book} status={status} />
            <StyledBookSpan style={{ textAlign: 'start' }} onClick={() => setBook(book)} >{name}</StyledBookSpan>
            <StyledBookSpan>Author: {authors}</StyledBookSpan>
            <StyledBookSpan style={{ display: "inline-block", minWidth: '100px' }}>Pages:
                <span style={{ display: "inline-block", minWidth: '40px', textAlign: 'end' }}>{pages}</span>
            </StyledBookSpan>
            <StyledBookSpan style={{ display: "inline-block", minWidth: '100px' }}>Stock:
                <span style={{ display: "inline-block", minWidth: '10px', textAlign: 'end' }}>{stock}</span>
            </StyledBookSpan>
        </StyledBook>
    )
}