import { FETCH_CLASSES_START, FETCH_CLASSES_SUCCESS, FETCH_CLASSES_FAILURE } from "../actions"

const initialState = {
    isLoading: false,
    classData: [],
    error: ""
}

export const classReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_CLASSES_START:
            return {
                ...state,
                isLoading: true,
                error: ""
            };
        case FETCH_CLASSES_SUCCESS:
            return {
                isLoading: false,
                classData: action.payload
            };
        case FETCH_CLASSES_FAILURE:
            return {
                isLoading: false,
                error: action.payload
            }
        default:
            return state;
    }
}