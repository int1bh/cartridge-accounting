import { GET_ALL_SUBDIVISION, GET_SUBDIVISION_STATE } from '../actions/subdivisionActions'

const initialState = {
    subdivision: []
}

export function subdivisionReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_SUBDIVISION:
        return {
            ...state, subdivision: action.payload
        }
        case GET_SUBDIVISION_STATE:
            return {...state}
        default:
        return state
    }
}
