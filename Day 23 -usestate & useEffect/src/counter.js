import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("initial");
    console.log("counter rendered", count);
    // const handleClick = () => {
    //     setCount(count + 1); // 0 + 1 => 1
    //     setCount(count + 1); // 0 + 1 => 1
    //     setCount(count + 1); // 0 + 1 => 1
    //     setCount(count + 1); // 0 + 1 => 1
    // }

    // updater func
    const handleClick = () => {
        setCount((prevCount) => prevCount + 1); // 0 + 1 => 1
        setCount((prevCount) => prevCount + 1); // 1 + 1 => 2
        setCount((prevCount) => prevCount + 1); // 2 + 1 => 3
        setCount((prevCount) => prevCount + 1); // 3 + 1 => 4
        setText(`${text} ${count}`);
        console.log("after click", count);
    }
    return (
        <div>
            <button onClick={handleClick}>Count: {count}</button>
            {text}
        </div>
    )
}

export default Counter;