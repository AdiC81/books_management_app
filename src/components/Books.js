import { useEffect, useState } from "react"
import styled from "styled-components";
import Book from "./Book";
import Loading from "./Loading";

const BooksList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 10px;
    background: #aaa;
    padding: 10px 0 10px 10px;
`

export default function Books() {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://anapioficeandfire.com/api/books")
        .then(response => response.json())
        .then(result => {
            setLoading(false);
            setBooks(result) 
        })
    }, [])

    if (loading) {
        return <Loading />
    }

    return (
        <BooksList>
            {books.map((book, index) => <Book key={index} book={book}/>)}
        </BooksList>
    )
}