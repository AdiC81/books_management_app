import { useEffect, useRef, useState } from "react";
import CharacterDetails from "./CharacterDetails";
import Character from "./Character";
import { Button, Title, StyledDiv, Subtitle } from "./_styled";
import styled from "styled-components";
import { useContext } from "react";
import { CurrentBookContext } from "../context/CurrentBookContext";

const StyledList = styled(StyledDiv)`
    min-width: 600px;
    text-align: center;
`

const StickyTitle = styled.div`
    position: sticky;
    display: flex;
    align-items: center;
    top: 0;
    z-index: 100;
    background-color: #aaa;
    transform: translateY(${props => props.titleTranslate}) scaleY(${props => props.isScrolled});
    transition: all .1s;
`

const StickyCharacters = styled(Subtitle)`
    position: sticky;
    top: ${props => props.primary};
    color: ${props => props.secondary};
    background-color: #aaa;
    min-width: 600px;
`

export default function BookDetails({ book }) {
    const [character, setCharacter] = useState();
    const [elementDetails, setElementDetails] = useState();
    const [isScrolled, setIsScrolled] = useState();
    const [titleTranslate, setTitleTranslate] = useState();
    const [subtitleColor, setSubtitleColor] = useState();

    const { name, characters, povCharacters, country, publisher, released } = book;
    const element = useRef(null);

    const { setBook } = useContext(CurrentBookContext);

    useEffect(() => {
        const height = element.current.clientHeight;
        setElementDetails(height);
        
        const handleOnScroll = () => {
            const scroll = window.scrollY;
            if (scroll > 0) {
                setIsScrolled("80%");
                setTitleTranslate("-10px");
                setElementDetails(height - 20);
                setSubtitleColor("white");
            }
            else {
                setIsScrolled(1);
                setTitleTranslate("0");
                setSubtitleColor("black");
            }
        }

        window.addEventListener('scroll', handleOnScroll)
    }, [])

    return (
        character ?
            <CharacterDetails onClick={(() => setCharacter())} character={character} /> :
            <div>
                <StickyTitle ref={element} isScrolled={isScrolled} titleTranslate={titleTranslate}>
                    <Button onClick={() => setBook(null)}>{'<'}</Button>
                    <Title style={{flex: 1}} >{name}</Title>
                </StickyTitle>
                <StyledList>
                    <StickyCharacters primary={`${elementDetails}px`} secondary={subtitleColor}>Book Details</StickyCharacters>
                    <span>Country: {country}</span>
                    <span>Publisher: {publisher}</span>
                    <span>Released date: {new Date(released).toDateString()}</span>
                </StyledList>
                <StyledList>
                    {(povCharacters.length > 0) && <StickyCharacters primary={`${elementDetails}px`} secondary={subtitleColor}>POV Characters</StickyCharacters>}
                    {povCharacters.map((character, index) =>
                        <Character
                            key={index}
                            character={character}
                            showCharacterDetails={(character) => setCharacter(character)} />
                    )}
                </StyledList>
                <StyledList>
                    <StickyCharacters primary={`${elementDetails}px`} secondary={subtitleColor}>Characters</StickyCharacters>
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