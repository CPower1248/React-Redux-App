import { FETCH_POKE_START, FETCH_POKE_SUCCESS, FETCH_POKE_FAIL } from "../actions"

export const initialState = {
    pokemon: [],
    isFetching: false,
    error: ""
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_POKE_START:
            return({
                ...state, 
                isFetching: true,
                error: ""
            })
        case FETCH_POKE_SUCCESS:
            return ({
                ...state,
                isFetching: false,
                pokemon: action.payload
            })
        case FETCH_POKE_FAIL:
            return ({
                ...state,
                isFetching: false,
                error: action.payload
            })
        default:
            return state
    }
}