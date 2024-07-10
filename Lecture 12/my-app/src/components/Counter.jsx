import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleIncrease = () => {
        setCount(count + 1);
    };

    const handleDecrease = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <button onClick={handleIncrease}>Increase</button>
            <h2>{count}</h2>
            <button onClick={handleDecrease}>Decrease</button>
        </div>
    )
}

export default Counter