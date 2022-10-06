import { useEffect, useState } from "react";
import styled from "styled-components";

const StyledInput = styled.input`

    &:after {
        background-color: ${props => props.dataSet ? "gray" : " "};
        padding: 2px 0 3px;
    }
`

export default function Checkbox({ stock, status, onClick }) {
    const [checked, setChecked] = useState();
    const [isDisabled, setIsDisabled] = useState();

    useEffect(() => {
        if (status === "Borrow" && stock === 0) {
            setIsDisabled(true);
        }
        if (status === "Return" && stock === 3) {
            setIsDisabled(true);
        }
        else setIsDisabled(false);
    }, [stock, status]);

    const handleClick = () => {
        setChecked(!checked);
        if (onClick) {
            onClick(checked);
        }
    }

    return (
        <>
            <input type={'checkbox'} name={'name'} className={'hide'} defaultChecked={checked} />
            <StyledInput
                type={'checkbox'}
                htmlFor="name"
                onClick={handleClick}
                disabled={isDisabled}
                dataSet={isDisabled ? "yes" : ""} />
        </>
    )
}