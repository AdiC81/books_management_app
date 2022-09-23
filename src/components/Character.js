export default function Character({ character, showCharacterDetails }) {
    const handleClick = () => {
        if (showCharacterDetails) {
            showCharacterDetails(character)
        }
    }

    return (
        <div onClick={handleClick} >{character}</div>
    )
}