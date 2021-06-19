export const GET_ALL_SUBDIVISION = 'GET_ALL_SUBDIVISION'
export const SHOW_LOADER = 'SHOW_LOADER'
export const HIDE_LOADER = 'HIDE_LOADER'

export function viewSubdivision() {
    return async dispatch => {
        const response = await fetch('http://localhost:5000/api/getsubdivision')
        const json = await response.json()
        dispatch({type: GET_ALL_SUBDIVISION, payload: json})
    }
}
