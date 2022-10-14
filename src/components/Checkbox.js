import { useEffect, useState } from "react";
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
    const [isDisabled, setIsDisabled] = useState();

    const { stock } = book;

    const {addToBookList} = useCheckedBook();

    useEffect(() => {
        if (status === "Borrow" && stock === 0) {
            setIsDisabled(true);
        }
        else if (status === "Return" && stock === 3) {
            setIsDisabled(true);
        }
        else setIsDisabled(false);
    }, [stock, status, isDisabled]);

    const handleOnInput = (e) => {
        const checked = e.target.checked;
        setChecked(checked);
        addToBookList(checked, book);
    }

    return (
        <>
            <input type={'checkbox'} name={'name'} className={'hide'} defaultChecked={checked} />
            <StyledInput
                type={'checkbox'}
                htmlFor="name"
                onInput={handleOnInput}
                disabled={isDisabled}
                dataSet={isDisabled ? "yes" : ""} />
        </>
    )
}