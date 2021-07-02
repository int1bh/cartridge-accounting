export const GET_TRASHED_CARTRIDGE = "GET_TRASHED_CARTRIDGE";
export const LOADING = "LOADING";
export const LOADED = "LOADED";
export const SHOW_ERROR = "SHOW_ERROR";
export const HIDE_ERROR = "HIDE_ERROR";
export const CLEAR = "CLEAR";

export function getCartridge(barcode) {
  return async (dispatch) => {
    try {
      dispatch({ type: LOADING });
      const response = await fetch("/api/getone?barcode=" + barcode);
      const json = await response.json();
      if (response.ok) {
        dispatch({ type: GET_TRASHED_CARTRIDGE, payload: json });
        dispatch({ type: LOADED });
      } else {
        throw new Error({ message: "Картридж не найден" });
      }
    } catch (e) {
      dispatch(showAlert(SHOW_ERROR));
    }
  };
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
