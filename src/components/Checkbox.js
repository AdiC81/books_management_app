import { useState } from "react"

export default function Checkbox() {
    const [checked, setChecked] = useState();

    const handleClick = () => {
        setChecked(!checked);
    }

    return (
        <>
            <input type={'checkbox'} name={'name'} defaultChecked={checked} />
            <label htmlFor="name" onClick={handleClick} />
        </>
    )
}