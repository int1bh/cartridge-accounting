export const ISSUE_LIST_CANDIDATE = 'ISSUE_LIST_CANDIDATE'
export const ACCEP_LIST_CANDIDATE = 'ACCEP_LIST_CANDIDATE'
export const REFUEL_LIST_CANDIDATE = 'REFUEL_LIST_CANDIDATE'
export const ISSUE_SUBDIVISION = 'ISSUE_SUBDIVISION'
export const LOADING = "LOADING";
export const LOADED = "LOADED";
export const SHOW_ERROR = "SHOW_ERROR";
export const HIDE_ERROR = "HIDE_ERROR";
export const CLEAR = "CLEAR";

export function getIssueCandidate(barcode) {
    return async (dispatch) => {
      try {
        dispatch({ type: LOADING });
        const response = await fetch("/api/getone?barcode=" + barcode);
        const json = await response.json();
        if (response.ok & !json[0].issued & !json[0].toRefuel) {
          dispatch({ type: ISSUE_LIST_CANDIDATE, payload: json });
          dispatch({ type: LOADED });
        } else {
          throw new Error({ message: "Выдан ранее, в заправке или не найден" });
        }
      } catch (e) {
        dispatch(showAlert(SHOW_ERROR));
      }
    };
  }

  export function getAcceptCandidate(barcode) {
    return async (dispatch) => {
      try {
        dispatch({ type: LOADING });
        const response = await fetch("/api/getone?barcode=" + barcode);
        const json = await response.json();
        if (response.ok & json[0].issued & !json[0].toRefuel) {
          dispatch({ type: ACCEP_LIST_CANDIDATE, payload: json });
          dispatch({ type: LOADED });
        } else {
          throw new Error({ message: "Уже на складе, в заправке или не найден" });
        }
      } catch (e) {
        dispatch(showAlert(SHOW_ERROR));
      }
    };
  }

  export function getRefuelCandidate(barcode) {
    return async (dispatch) => {
      try {
        dispatch({ type: LOADING });
        const response = await fetch("/api/getone?barcode=" + barcode);
        const json = await response.json();
        if (response.ok & !json[0].toRefuel) {
          dispatch({ type: REFUEL_LIST_CANDIDATE, payload: json });
          dispatch({ type: LOADED });
        } else {
          throw new Error({ message: "Уже в заправке или не найден" });
        }
      } catch (e) {
        dispatch(showAlert(SHOW_ERROR));
      }
    };
  }

  export function insertSubdivision(text) {
      return {
          type: ISSUE_SUBDIVISION,
          text
      }
  }
  
  export function showAlert(text) {
    return (dispatch) => {
      dispatch({ type: text });
  
      setTimeout(() => dispatch(hideAlert(HIDE_ERROR)), 2000);
    };
  }
  
  export function hideAlert(text) {
    return (dispatch) => {
      dispatch({ type: text });
    };
  }