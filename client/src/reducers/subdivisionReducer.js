import { GET_ALL_SUBDIVISION, SHOW_LOADER, HIDE_LOADER } from '../actions/subdivisionActions'

const initialState = {
    subdivision: []
}

export function subdivisionReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_SUBDIVISION:
        return {
            ...state, subdivision: action.payload
        }
        default:
        return state
    }
}