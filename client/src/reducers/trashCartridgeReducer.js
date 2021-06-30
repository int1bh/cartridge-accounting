import {GET_TRASHED_CARTRIDGE, LOADING} from "../actions/trashActions"

const initialState = {
  trashCandidate: [],
  isLoading: true
}

export function trashCartridgeReducer(state = initialState, action) {
    switch (action.type) {
        case GET_TRASHED_CARTRIDGE:
        return {
            ...state, trashCandidate: [...state.trashCandidate.concat(action.payload)]  
        }
        case LOADING:
        return {
            ...state, isLoading: false
        }
        default:
        return state
    }
}
