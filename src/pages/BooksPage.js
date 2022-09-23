import { useEffect, useState } from "react";
import BookDetails from "../components/BookDetails";
import Books from "../components/Books";

export default function BooksPage() {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [book, setBook] = useState();

    useEffect(() => {
        fetch("https://anapioficeandfire.com/api/books")
            .then(response => response.json())
            .then(result => {
                setLoading(false);
                setBooks(result);
            })
    }, [])

    return (
        book ?
            <BookDetails book={book} onClick={() => setBook()} /> :
            <Books books={books} isLoading={loading} showBookDetails={(book) => setBook(book)} />
    )
}