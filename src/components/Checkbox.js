import { useState } from "react";
import styled from "styled-components";
import { useCheckedBook } from "../context/CheckedBookContext";

const StyledInput = styled.input`

    &:after {
        background-color: ${props => props.dataSet ? "gray" : " "};
        padding: 2px 0 3px;
    }
`

export default function Checkbox({ book, status }) {
    const [checked, setChecked] = useState();

    const {addToBookList, removeFromBookList, isDisabled } = useCheckedBook();

    const bookDisabled = isDisabled(status, book);

    const handleOnInput = (e) => {
        const checked = e.target.checked;
        setChecked(checked);
        if (status === "Borrow") {
            addToBookList(checked, book);
        }
        else removeFromBookList(checked, book)
    }

    return (
        <>
            <input type={'checkbox'} name={'name'} className={'hide'} defaultChecked={checked} />
            <StyledInput
                type={'checkbox'}
                htmlFor="name"
                onInput={handleOnInput}
                disabled={bookDisabled}
                dataSet={bookDisabled ? "yes" : ""} />
        </>
    )
}