import {useEffect, useRef, useState} from "react";

export function Modal(): JSX.Element {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(isOpen_ => {
            return !isOpen_;
        })
    }

    useEffect(() => {
        const {current} = buttonRef;

        if (current !== null) {
            current.onclick = toggleOpen;
        }
    }, [buttonRef.current])

    // useEffect(() => {
    //     const button = document.querySelector('#buttonId') as HTMLButtonElement;
    //
    //     if (button !== null) {
    //         button.onclick = toggleOpen;
    //     }
    // }, [])

    return (
        <>
            <button
                onClick={toggleOpen}
            >
                Open Modal
            </button>
            <dialog open={isOpen}>
                <p>I'm a modal!</p>
                <button id='buttonId' ref={buttonRef}>Close</button>
            </dialog>
        </>
    );
}
