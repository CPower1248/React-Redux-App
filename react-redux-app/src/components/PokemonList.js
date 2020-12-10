import React from "react"
import { connect } from "react-redux"
import { getPoke } from "../actions"

import Pokemon from "./Pokemon"

const PokemonList = ({ error, isFetching, pokemon, getPoke }) => {
    if (isFetching) {
        return <h3>Gotta catch 'em all!</h3>
    }    
    
    if (error) {
        return <h3>The Pokemon escaped from the pokeball... {error}</h3>
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
