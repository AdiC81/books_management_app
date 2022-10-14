import { useEffect, useState } from "react";
import BookDetails from "../components/BookDetails";
import Books from "../components/Books";
import { useCurrentBook } from "../context/CurrentBookContext";

export default function BooksPage() {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const { book } = useCurrentBook();

    useEffect(() => {
        fetch("https://anapioficeandfire.com/api/books")
            .then(response => response.json())
            .then(result => {
                setLoading(false);
                const updatedResult = result.map(el => (
                    {...el, stock: 3}
                ));
                setBooks(updatedResult);
            })
        }, [])

    return (
        book ?
            <BookDetails book={book} /> :
            <Books books={books} isLoading={loading} />
    )
}