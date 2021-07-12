export const GET_ALL_MODEL = 'GET_ALL_MODEL'
export const GET_MODEL_STATE = 'GET_MODEL_STATE'
export const SHOW_LOADER = 'SHOW_LOADER'
export const HIDE_LOADER = 'HIDE_LOADER'

export function viewModel() {
    return async dispatch => {
        const response = await fetch('/api/getmodel')
        const json = await response.json()
        dispatch({type: GET_ALL_MODEL, payload: json})
    }
}

export function getModelState() {
    return dispatch => dispatch({type: GET_MODEL_STATE})
}