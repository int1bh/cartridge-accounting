import {
    ISSUE_LIST_CANDIDATE,
    LOADED,
    LOADING,
    SHOW_ERROR,
    HIDE_ERROR,
    CLEAR,
    ISSUE_SUBDIVISION,
  } from "../actions/operationsActions";
  
  const initialState = {
    issueCandidate: [],
    issueSubdivision: '',
    isLoading: false,
    isNoContent: true,
    isError: false,
  };
  
  export function issueCartridgeReducer(state = initialState, action) {
    switch (action.type) {
      case ISSUE_LIST_CANDIDATE:
        return {
          ...state,
          issueCandidate: [...state.issueCandidate.concat(action.payload)],
        };
        case ISSUE_SUBDIVISION:
            return {
                ...state, issueSubdivision: action.text
            }
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
  