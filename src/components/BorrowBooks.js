import { Button } from "./_styled";

export default function BorrowBooks({ updatedBooks, status, onConfirm }) {
    const handleOnConfirm = () => {
        updatedBooks.map(book => {
            if (status === "Borrow") {
                return book.stock -= 1;
            } else {
                return book.stock += 1;
            }
        })
        if (onConfirm) {
            onConfirm()
        }
    }
    return (
        <div>
            {updatedBooks.map((updatedBook, index) => (
                <div key={index}>{updatedBook.name} - {updatedBook.publisher}</div>
            ))}
            <Button onClick={handleOnConfirm}>Confirm</Button>
        </div>
    )
}