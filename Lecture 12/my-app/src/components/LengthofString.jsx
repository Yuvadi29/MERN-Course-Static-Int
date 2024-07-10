import React, { useState } from 'react'

const LengthofString = () => {
    const [input1, setInput1] = useState("");
    const [display1, setDisplay1] = useState("");

    const submitBtnNew = () => {
        setDisplay1(input1.length);
    };

    return (
        <h1>
            <input
                type='text'
                placeholder='Enter Something'
                value={input1}
                onChange={(e) => setInput1(e.target.value)}
            />
            <button type='submit' onClick={submitBtnNew}>Submit</button>
            <p>Length of String is : {display1}</p>
        </h1>
    )
}

export default LengthofString;