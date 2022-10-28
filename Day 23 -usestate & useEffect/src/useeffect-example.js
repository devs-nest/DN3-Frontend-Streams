import React, { useEffect, useState } from 'react'

function UseEffectExample() {

    console.log("render");

    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    useEffect(() => {
        const handleMove = (e) => {
            setCursorPosition({ x: e.clientX, y: e.clientY });
            console.log("pointer move event")
        }
        console.log(
            "addEventlistener add for pointermove"
        );
        window.addEventListener("pointermove", handleMove)

        // clean up function 
        return window.removeEventListener("pointermove", handleMove);
    }, [])
    return (
        <div>x: {cursorPosition.x}, y:{cursorPosition.y}</div>
    )
}

export default UseEffectExample