import React, { useState } from 'react'

const MouseCoord = () => {
    const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event) => {
        setCoordinates({
            x: event.clientX,
            y: event.clientY
        });
    };
    
    return (
        <div onMouseMove={handleMouseMove} style={{ width: '300px', height: '300px', border: '1px solid black' }}>
            <p>Mouse Coordinates: {`(${coordinates.x}, ${coordinates.y})`}</p>
        </div>
    )
}

export default MouseCoord