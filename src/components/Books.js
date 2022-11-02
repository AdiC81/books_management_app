import { useState } from "react";
import styled from "styled-components";
import { useCheckedBook } from "../context/CheckedBookContext";
import Book from "./Book";
import BorrowBooks from "./BorrowBooks";
import Loading from "./Loading";
import { Title, StyledDiv, Button } from "./_styled";

const BooksList = styled(StyledDiv)`
    row-gap: 10px;
    background-image: none;
    padding: 10px 30px 30px 40px;
`

const StatusBar = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding-bottom: 10px;
    font-family: 'Indie Flower', cursive;
    `

const StatusCheckbox = styled.div`
    display: flex;
    align-items: center;
    color: white;
`

export default function Books({ books, isLoading }) {
    const [action, setAction] = useState();
    const [status, setStatus] = useState("Borrow");
    const [statusChecked, setStatusChecked] = useState(true);

    const { checkedBooks, decreaseStock, increaseStock } = useCheckedBook();

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
        setAction(false);
        setStatusChecked(true);
        setStatus("Borrow");
        checkedBooks.splice(0);
    }
    
    const handleClick = () => {
        if (checkedBooks.length > 0) {
            setAction(true);
            if (status === "Borrow") {
                decreaseStock(checkedBooks);
            }
            else increaseStock(checkedBooks);
        }
        else return;
    }

    if (isLoading) {
        return <Loading />
    }

    return (
        action ?
            <BorrowBooks updatedBooks={checkedBooks} onConfirm={handleConfirm} /> :
            <StyledDiv>
                <Title>The Complete Colection Of {books[0].authors}</Title>
                <StatusBar>
                    <StatusCheckbox>
                        <input
                        type={"checkbox"}
                        onChange={handleOnChangeStatus}
                        value={"Borrow"}
                        checked={statusChecked ? "Yes" : ""}
                        disabled={checkedBooks.length > 0 && !statusChecked ? true : false} />
                        <label>Borrow</label>
                    </StatusCheckbox>
                    <Button onClick={handleClick}>{statusChecked ? "Borrow!" : "Return!"} </Button>
                    <StatusCheckbox>
                        <input
                        type={"checkbox"}
                        onChange={handleOnChangeStatus}
                        value={"Return"}
                        checked={statusChecked ? "" : "Yes"}
                        disabled={checkedBooks.length > 0 && statusChecked ? true : false} />
                        <label>Return</label>
                    </StatusCheckbox>
                </StatusBar>
                <BooksList>{books.map((book, index) =>
                    <Book
                        key={index}
                        book={book}
                        status={status}
                    />)}
                </BooksList>
            </StyledDiv>
    )
}