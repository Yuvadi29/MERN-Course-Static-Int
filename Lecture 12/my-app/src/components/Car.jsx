import React from 'react'

const Car = (props) => {
    return (
        <h3>I own a {props.brand} with the model {props.model}</h3>
    )
}

// Destructuring
// const Car = ({ brand, model }) => {
//     return (
//         <h3>I own a {brand}</h3>
//     )
// }
export default Car