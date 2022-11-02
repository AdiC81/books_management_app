import styled from "styled-components";
import { ReturnBtn } from "./BookDetails";

const StyledShortList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: whitesmoke;
    font-weight: bolder;
    min-height: 400px;
    min-width: 400px;
    border-radius: 100%;
    background-image: url("img/house_logo_3.jpeg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`

export default function BorrowBooks({ updatedBooks, onConfirm }) {
    const handleOnConfirm = () => {
        if (onConfirm) {
            onConfirm()
        }
    }
    return (
        <StyledShortList>
            {updatedBooks.map((updatedBook, index) => (
                <div key={index}>{updatedBook.name}</div>
            ))}
            <ReturnBtn onClick={handleOnConfirm}>Confirm!</ReturnBtn>
        </StyledShortList>
    )
}