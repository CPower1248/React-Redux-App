import React from "react"

const Pokemon = ({ details }) => {
    console.log(details)
    return (
        <div className="pokemon">
            <h3>{details.name}</h3>
        </div>
    )
}

export default Pokemon
