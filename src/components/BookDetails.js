import { useState } from "react";
import CharacterDetails from "./CharacterDetails";
import Character from "./Character";
import { Button, Title, StyledDiv, Subtitle } from "./_styled";
import styled from "styled-components";

const StyledList = styled(StyledDiv)`
    background: #aaa;
    padding: 0 10px;
    min-width: 600px;
    text-align: center;
`

const StickyTitle = styled.div`
    position: sticky;
    top: 0;
    background: yellow;
`

const StickyPOV = styled(Subtitle)`
    position: sticky;
    top: 98px;
`

const StickyCharacters = styled(Subtitle)`
    position: sticky;
    top: 80px;
`

export default function BookDetails({ book, onClick }) {
    const [character, setCharacter] = useState();
    const { name, characters, povCharacters } = book;

    const handleClose = () => {
        if (onClick) {
            onClick();
        }
    }

    return (
        character ?
            <CharacterDetails onClick={(() => setCharacter())} /> :
            <div>
                <StickyTitle>
                    <Button onClick={handleClose} >{'<'}</Button>
                    <Title>{name}</Title>
                </StickyTitle>
                <StyledList>
                    {(povCharacters.length > 0) && <StickyPOV>POV Characters</StickyPOV>}
                    {povCharacters.map((character, index) =>
                        <Character
                            key={index}
                            character={character}
                            showCharacterDetails={(character) => setCharacter(character)} />
                    )}
                </StyledList>
                <StyledList>
                    <StickyCharacters>Characters</StickyCharacters>
                    {characters.map((character, index) =>
                        <Character
                            key={index}
                            character={character}
                            showCharacterDetails={(character) => setCharacter(character)} />
                    )}
                </StyledList>
            </div>
    )
}