import React from "react"

const Pokemon = ({ details }) => {
    console.log(details)

    // const name = details.name
    // const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1)
    function capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }

    return (
        <div className="pokemon">
            <h3>{capitalize(details.name)}</h3>            
        </div>
    )
}

export default Pokemon
