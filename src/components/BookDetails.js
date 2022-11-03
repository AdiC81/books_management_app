import { useEffect, useRef, useState } from "react";
import CharacterDetails from "./CharacterDetails";
import Character from "./Character";
import { ReturnBtn, StyledDiv, Subtitle, SwitchTitleLogo } from "./_styled";
import styled from "styled-components";
import { useCurrentBook } from "../context/CurrentBookContext";

const StyledList = styled(StyledDiv)`
    min-width: 600px;
    text-align: center;
    background-image: none;
    color: ${props => props.secondary};
`

const StyledBackground = styled.div`
    background-image: url("img/fire-1.jpg");
`

const StickyCharacters = styled(Subtitle)`
    position: sticky;
    top: ${props => props.primary};
    color: ${props => props.secondary};
    background-image: url("img/fire-1.jpg");
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

    const { setBook } = useCurrentBook();

    useEffect(() => {
        const height = element.current.clientHeight;
        setElementDetails(height);

        const handleOnScroll = () => {
            const scroll = window.scrollY;
            const TRANS_PERCENTAGE = 50;

            if (scroll > 0) {
                setIsScrolled(`${TRANS_PERCENTAGE}%`);
                setTitleTranslate(`-${(height * ((100 - TRANS_PERCENTAGE) / 100)) / 2}px`);
                setElementDetails(`${height - (height * ((100 - TRANS_PERCENTAGE) / 100))}`);
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
            <StyledBackground>
                <SwitchTitleLogo ref={element} isScrolled={isScrolled} titleTranslate={titleTranslate} $mode={name}>
                    <ReturnBtn onClick={() => setBook(null)}>{'BACK!'}</ReturnBtn>
                </SwitchTitleLogo>
                <StyledList secondary={subtitleColor}>
                    <StickyCharacters primary={`${elementDetails}px`} secondary={subtitleColor}>Book Details</StickyCharacters>
                    <span>Country: {country}</span>
                    <span>Publisher: {publisher}</span>
                    <span>Released date: {new Date(released).toDateString()}</span>
                </StyledList>
                <StyledList secondary={subtitleColor}>
                    {(povCharacters.length > 0) && <StickyCharacters primary={`${elementDetails}px`} secondary={subtitleColor}>POV Characters</StickyCharacters>}
                    {povCharacters.map((character, index) =>
                        <Character
                            key={index}
                            character={character}
                            showCharacterDetails={(character) => setCharacter(character)} />
                    )}
                </StyledList>
                <StyledList secondary={subtitleColor}>
                    <StickyCharacters primary={`${elementDetails}px`} secondary={subtitleColor}>Characters</StickyCharacters>
                    {characters.map((character, index) =>
                        <Character
                            key={index}
                            character={character}
                            showCharacterDetails={(character) => setCharacter(character)} />
                    )}
                </StyledList>
            </StyledBackground>
    )
}