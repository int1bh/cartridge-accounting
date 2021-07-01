import {GET_TRASHED_CARTRIDGE, LOADED, LOADING, ERROR} from "../actions/trashActions"

const initialState = {
  trashCandidate: [],
  isLoading: false,
  isNoContent: true,
  isError: false
}

export function trashCartridgeReducer(state = initialState, action) {
    switch (action.type) {
        case GET_TRASHED_CARTRIDGE:
        return {
            ...state, trashCandidate: [...state.trashCandidate.concat(action.payload)]  
        }
        case LOADING:
        return {
            ...state, isLoading: true, isNoContent: false
        }
        case LOADED:
            return {
                ...state, isLoading: false, isNoContent:false
            }
        case ERROR:
            return {
                ...state, isLoading: false, isNoContent:false, isError: true
            }
        default:
        return state
    }
}
