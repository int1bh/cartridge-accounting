import { GET_ALL_MODEL, GET_MODEL_STATE, SHOW_LOADER, HIDE_LOADER } from '../actions/modelActions'

const initialState = {
    modelCartridges: []
}

export function modelReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_MODEL:
        return {
            ...state, modelCartridges: action.payload
        }
        case GET_MODEL_STATE:
        return {...state}
        default:
        return state
    }
}
