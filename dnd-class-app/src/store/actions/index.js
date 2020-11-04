import axios from "axios"

export const FETCH_CLASSES_START = "FETCH_CLASSES_START";
export const FETCH_CLASSES_SUCCESS = "FETCH_CLASSES_SUCCESS";
export const FETCH_CLASSES_FAILURE = "FETCH_CLASSES_FAILURE";

export const fetchClasses = () => {
    return(dispatch) => {
        dispatch({ type: FETCH_CLASSES_START })

        axios.get("https://www.dnd5eapi.co/api/classes/")
            .then(res => {
                console.log("THIS IS RES: ", res)
                dispatch({ type: FETCH_CLASSES_SUCCESS, payload: res.data.results })
            })
            .catch(err => {
                dispatch({ type: FETCH_CLASSES_FAILURE, payload: err.message })
            })
    }
}