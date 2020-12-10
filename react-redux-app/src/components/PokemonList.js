import React from "react"
import { connect } from "react-redux"
import { getPoke } from "../actions"

import Pokemon from "./Pokemon"

const PokemonList = ({ error, isFetching, pokemon, getPoke }) => {
    if (isFetching) {
        return <h2>Gotta catch 'em all!</h2>
    }    
    
    if (error) {
        return <h2>The Pokemon escaped from the pokeball... {error}</h2>
    }

    const handleFetch = () => {
        getPoke();
    }

    return (
        <div className="pokemonlist">
            <button onClick={handleFetch}>Throw Pokeball</button>
            <div className="pokemon-container">
                {pokemon.map(item => {
                    return <Pokemon details={item} />
                })}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        pokemon: state.pokemon,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, { getPoke })(PokemonList)
