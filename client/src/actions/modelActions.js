export const GET_ALL_MODEL = 'GET_ALL_MODEL'
export const SHOW_LOADER = 'SHOW_LOADER'
export const HIDE_LOADER = 'HIDE_LOADER'

export function viewModel() {
    return async dispatch => {
        const response = await fetch('http://localhost:5000/api/getmodel')
        const json = await response.json()
        dispatch({type: GET_ALL_MODEL, payload: json})
    }
}

export function getModelState() {
    return dispatch => dispatch({type: GET_ALL_MODEL})
}