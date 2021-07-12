export const GET_ALL_SUBDIVISION = 'GET_ALL_SUBDIVISION'
export const GET_SUBDIVISION_STATE = 'GET_SUBDIVISION_STATE'
export const SHOW_LOADER = 'SHOW_LOADER'
export const HIDE_LOADER = 'HIDE_LOADER'

export function viewSubdivision() {
    return async dispatch => {
        const response = await fetch('/api/getsubdivision')
        const json = await response.json()
        dispatch({type: GET_ALL_SUBDIVISION, payload: json})
    }
}

export function getState() {
    return dispatch => dispatch({type: GET_SUBDIVISION_STATE})
}
