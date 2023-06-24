import React from "react";

const Horse = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <p>{props.breed}</p>
            <p>{props.age}</p>
            <p>{props.height}</p>
        </div>
    )
}

export default Horse;