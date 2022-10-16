import { Button } from "./_styled";

export default function BorrowBooks({ updatedBooks, onConfirm }) {
    const handleOnConfirm = () => {
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