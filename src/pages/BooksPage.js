import { useContext } from "react";
import { useEffect, useState } from "react";
import BookDetails from "../components/BookDetails";
import Books from "../components/Books";
import { CurrentBookContext } from "../context/CurrentBookContext";

export default function BooksPage() {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const { book } = useContext(CurrentBookContext);

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