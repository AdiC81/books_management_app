import styled from "styled-components"
import { StyledSpan } from "./_styled"

const StyledCharSpan = styled(StyledSpan)`

    &:hover {
        background-color: #eee;
        border-radius: 3px;
        cursor: pointer;
    }

    &:hover:first-of-type {
        transform: none;
    }
`

export default function Character({ character, showCharacterDetails }) {
    const handleClick = () => {
        if (showCharacterDetails) {
            showCharacterDetails(character)
        }
    }

    return (
        <StyledCharSpan onClick={handleClick}>{character}</StyledCharSpan>
    )
}