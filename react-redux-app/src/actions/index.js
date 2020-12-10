import axios from "axios"

export const FETCH_POKE_START = "FETCH_POKE_START"
export const FETCH_POKE_SUCCESS = "FETCH_POKE_SUCCESS"
export const FETCH_POKE_FAIL = "FETCH_POKE_Fail"

export const getPoke = () => dispatch => {
    dispatch({type: FETCH_POKE_START})

    axios.get("https://pokeapi.co/api/v2/pokemon?limit=151")
        .then(res => {
            dispatch({type: FETCH_POKE_SUCCESS, payload: res.data.results})
        })
        .catch(err => {
            dispatch({type: FETCH_POKE_FAIL, payload: err.message})
        })

    // // getPokeDetails()
    // axios.get({`https://pokeapi.co/api/v2/pokemon/${id}?limit=151`})
}
