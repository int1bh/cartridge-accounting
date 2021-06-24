import { GET_ALL_MODEL, SHOW_LOADER, HIDE_LOADER } from '../actions/modelActions'

const initialState = {
    modelCartridges: []
}

export function modelReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_MODEL:
        return {
            ...state, modelCartridges: action.payload
        }
        default:
        return state
    }
}
