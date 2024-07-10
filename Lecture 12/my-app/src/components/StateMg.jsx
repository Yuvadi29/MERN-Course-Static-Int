import React, { useState } from 'react'

const StateMg = () => {
    // const [first, setfirst] = useState(0)
    const [input, setInput] = useState("");
    const [display, setDisplay] = useState("");
    // const [first, setfirst] = useState([])
    // const [first, setfirst] = useState({}) =

    const submitBtn = () => {
        // setInput(input);
        setDisplay(input);
        
    };

    return (
        <h1>
            <input
                type='text'
                placeholder='Enter Something'
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button type='submit' onClick={submitBtn}>Submit</button>
            {/* <p>{input}</p> */}
            <p>{display}</p>
        </h1>
    )
}

export default StateMg