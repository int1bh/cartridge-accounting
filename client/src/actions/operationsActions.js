export const ISSUE_LIST_CANDIDATE = 'ISSUE_LIST_CANDIDATE'
export const ACCEP_LIST_CANDIDATE = 'ACCEP_LIST_CANDIDATE'
export const REFUEL_LIST_CANDIDATE = 'REFUEL_LIST_CANDIDATE'
export const FROM_REFUEL_LIST_CANDIDATE = 'FROM_REFUEL_LIST_CANDIDATE'
export const ISSUE_SUBDIVISION = 'ISSUE_SUBDIVISION'
export const GET_FILTERED_WAREHOUSE = 'GET_FILTERED_WAREHOUSE'
export const GET_FILTERED_ISSUED = 'GET_FILTERED_ISSUED'
export const GET_FILTERED_REFUEL = 'GET_FILTERED_REFUEL'
export const GET_FILTERED_SCRAPPED = 'GET_FILTERED_SCRAPPED'
export const GET_FILTERED_EMPTY = 'GET_FILTERED_EMPTY'
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
        if (response.ok & !json[0].issued & !json[0].toRefuel & !json[0].scrapped) {
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
        if (response.ok & json[0].issued & !json[0].toRefuel & !json[0].scrapped) {
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
        if (response.ok & !json[0].toRefuel & !json[0].scrapped) {
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


  export function getFromRefuelCandidate(barcode) {
    return async (dispatch) => {
      try {
        dispatch({ type: LOADING });
        const response = await fetch("/api/getone?barcode=" + barcode);
        const json = await response.json();
        if (response.ok & json[0].toRefuel & !json[0].scrapped) {
          dispatch({ type: FROM_REFUEL_LIST_CANDIDATE, payload: json });
          dispatch({ type: LOADED });
        } else {
          throw new Error({ message: "Заправлен ранее" });
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
  
      setTimeout(() => dispatch(hideAlert(HIDE_ERROR)), 3000);
    };
  }
  
  export function hideAlert(text) {
    return (dispatch) => {
      dispatch({ type: text });
    };
  }

  export function getFiltered(query, type) {
    return async (dispatch) => {
      try {
        const response = await fetch("/api/find?" + query);
        const json = await response.json();
        if (response.ok) {
          dispatch({ type: type, payload: json });
        } else {
          throw new Error({ message: 'error' });
        }
      } catch (e) {
        console.log(e.message);
      }
    };
  }