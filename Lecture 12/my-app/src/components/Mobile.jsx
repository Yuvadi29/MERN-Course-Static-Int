import React from 'react'

const Mobile = (props) => {
    return (
        <h1 style={{
            color: "yellow",
            background: "blue",
            padding: '5px'
        }}>
            I own a {props.color} {props.brand} phone which is of Rs {props.price} and has rating of {props.rating} and I purchased it from {props.location}.
        </h1>
    )
}

export default Mobile