import { useContext } from "react";
import { useState } from "react";
import styled from "styled-components";
import { CurrentBookContext } from "../context/CurrentBookContext";
import Book from "./Book";
import BorrowBooks from "./BorrowBooks";
import Loading from "./Loading";
import { Title, StyledDiv, Button } from "./_styled";

const BooksList = styled(StyledDiv)`
    row-gap: 10px;
    background: #aaa;
    padding: 10px 0 10px 10px;
`

const StatusBar = styled(StyledDiv)`
    flex-direction: row;
    justify-content: space-evenly;
    padding-bottom: 10px;
`

const StatusCheckbox = styled.div`
    display: flex;
    align-items: center;
`

export default function Books({ books, isLoading }) {
    const [updatedBooks, setUpdatedBooks] = useState([]);
    const [action, setAction] = useState();
    const [status, setStatus] = useState("Borrow");
    const [statusChecked, setStatusChecked] = useState(true);

    const {setBook} = useContext(CurrentBookContext);

    const handleClick = (book) => {
        setBook(book);
    }

    const handleChecked = (checked, updatedBook) => {
        const array = [...updatedBooks];
        if (!checked) {
            if (array.includes(updatedBook)) return;
            array.push(updatedBook);
            setUpdatedBooks(array);
        }
        if (checked) {
            array.splice(array.indexOf(updatedBook), 1);
            setUpdatedBooks(array);
        }
    }

    const handleOnChangeStatus = (e) => {
        const statusValue = e.target.value;
        if (statusValue === "Borrow") {
            setStatus(statusValue);
            setStatusChecked(true);
        }
        else {
            setStatus(statusValue);
            setStatusChecked(false);
        }
    }
    
    const handleConfirm = () => {
        setStatusChecked(true);
        setAction(false);
        setStatus("Borrow");
        updatedBooks.splice(0);
    }

    if (isLoading) {
        return <Loading />
    }

    return (
        action ?
            <BorrowBooks updatedBooks={updatedBooks} status={status} onConfirm={handleConfirm} /> :
            <StyledDiv>
                <Title>The Complete Colection Of {books[0].authors}</Title>
                <StatusBar>
                    <StatusCheckbox>
                        <input
                        type={"checkbox"}
                        onChange={handleOnChangeStatus}
                        value={"Borrow"}
                        checked={statusChecked ? "Yes" : ""}
                        disabled={updatedBooks.length > 0 && !statusChecked ? true : false} />
                        <label>Borrow</label>
                    </StatusCheckbox>
                    <Button onClick={() => setAction(true)}>{statusChecked ? "Borrow!" : "Return!"}</Button>
                    <StatusCheckbox>
                        <input
                        type={"checkbox"}
                        onChange={handleOnChangeStatus}
                        value={"Return"}
                        checked={statusChecked ? "" : "Yes"}
                        disabled={updatedBooks.length > 0 && statusChecked ? true : false} />
                        <label>Return</label>
                    </StatusCheckbox>
                </StatusBar>
                <BooksList>{books.map((book, index) =>
                    <Book
                        key={index}
                        book={book}
                        status={status}
                        showBookDetails={handleClick}
                        onChecked={handleChecked}
                    />)}
                </BooksList>
            </StyledDiv>
    )
}