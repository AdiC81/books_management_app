import { useEffect, useState } from "react";
import styled from "styled-components";
import { Button, Title } from "./_styled";

const StyledCategoryName = styled.span`
    font-weight: bold;
`

export default function CharacterDetails({ character, onClick }) {
    const [personage, setPersonage] = useState({});

    useEffect(() => {
        fetch(`${character}`)
            .then(response => response.json())
            .then(result => setPersonage(result))
    }, [character])

    const { name, gender, culture, born, titles, aliases } = personage;

    const handleClose = () => {
        if (onClick) {
            onClick();
        }
    }

    return (
        <div>
            <Button onClick={handleClose} >{'<'}</Button>
            <Title>{name}</Title>
            <div><StyledCategoryName>Gender</StyledCategoryName>: {gender}</div>
            <div><StyledCategoryName>Born</StyledCategoryName>: {born}</div>
            <div><StyledCategoryName>Culture</StyledCategoryName>: {culture}</div>
            <div style={{ maxWidth: "500px" }}>
                <StyledCategoryName>Titles</StyledCategoryName>:
                {titles && titles.map((title, index) => <span key={index}> {title}, </span>)}
            </div>
            <div style={{ maxWidth: "500px" }}>
                <StyledCategoryName>Aliases</StyledCategoryName>:
                {aliases && aliases.map((alias, index) => <span key={index}> {alias}, </span>)}
            </div>
        </div>
    )
}