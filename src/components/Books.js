import styled from "styled-components";
import Book from "./Book";
import Loading from "./Loading";
import { Title, StyledDiv } from "./_styled";

const BooksList = styled(StyledDiv)`
    row-gap: 10px;
    background: #aaa;
    padding: 10px 0 10px 10px;
`

export default function Books({ books, isLoading, showBookDetails }) {

    const handleClick = (book) => {
        if(showBookDetails) {
            showBookDetails(book);
        }
    }

    if (isLoading) {
        return <Loading />
    }

    return (
        <StyledDiv>
            <Title>The Complete Colection Of {books[0].authors}</Title>
            <BooksList>
                {books.map((book, index) => <Book key={index} book={book} showBookDetails={handleClick} />)}
            </BooksList>
        </StyledDiv>
    )
}