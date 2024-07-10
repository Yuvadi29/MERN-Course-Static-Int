import React, { useState } from 'react'

const Myself = () => {
    const [fName, setFName] = useState("");
    const [mName, setMName] = useState("");
    const [lName, setLName] = useState("");
    const [desc, setDesc] = useState("");
    const [data, setData] = useState("");

        const handleSubmitData = () => {
        const fullData = `${fName} ${mName} ${lName}: ${desc}`;
        setData(fullData);
    };

    return (
        <div>
            <input type='text' value={fName} onChange={(e) => setFName(e.target.value)} />

            <input type='text' value={mName} onChange={(e) => setMName(e.target.value)} />

            <input type='text' value={lName} onChange={(e) => setLName(e.target.value)} />

            <textarea value={desc} onChange={(e) => setDesc(e.target.value)} />

            <button onClick={handleSubmitData}>Submit</button>

            <h2>{data}</h2>

        </div>
    )
}

export default Myself