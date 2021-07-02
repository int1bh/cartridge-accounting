import {
  GET_TRASHED_CARTRIDGE,
  LOADED,
  LOADING,
  SHOW_ERROR,
  HIDE_ERROR,
  CLEAR,
} from "../actions/trashActions";

const initialState = {
  trashCandidate: [],
  isLoading: false,
  isNoContent: true,
  isError: false,
};

export function trashCartridgeReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TRASHED_CARTRIDGE:
      return {
        ...state,
        trashCandidate: [...state.trashCandidate.concat(action.payload)],
      };
    case LOADING:
      return {
        ...state,
        isLoading: true,
        isNoContent: false,
        isError: false,
      };
    case LOADED:
      return {
        ...state,
        isLoading: false,
        isNoContent: false,
        isError: false,
      };
    case CLEAR:
      return {
        ...state,
        isLoading: false,
        isNoContent: true,
        isError: false,
      };
    case SHOW_ERROR:
      return {
        ...state,
        isLoading: false,
        isNoContent: false,
        isError: true,
      };
    case HIDE_ERROR:
      return {
        ...state,
        isLoading: false,
        isNoContent: false,
        isError: false,
      };
    default:
      return state;
  }
}
