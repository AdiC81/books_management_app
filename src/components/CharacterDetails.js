import { Button } from "./_styled";

export default function CharacterDetails({ onClick }) {

    const handleClose = () => {
        if (onClick) {
            onClick();
        }
    }

    return (
        <div>
            <Button onClick={handleClose} >{'<'}</Button>
            <div>TEST</div>
        </div>
    )
}