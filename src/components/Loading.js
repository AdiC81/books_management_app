import styled from "styled-components"

const StyledDiv = styled.div`
    min-width: fit-content;
    padding: 5px;
    border-radius: 5px;
    background-color: #eee;
`

export default function Loading({message = 'Loading...'}) {
    return (
        <StyledDiv>{message}</StyledDiv>
    )
}