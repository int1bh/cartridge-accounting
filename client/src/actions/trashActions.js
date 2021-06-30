export const GET_TRASHED_CARTRIDGE = 'GET_TRASHED_CARTRIDGE'
export const LOADING = 'LOADING'

export function getCartridge(barcode) {
    return async dispatch => {
        const response = await fetch('/api/getone?barcode='+barcode)
        const json = await response.json()
        dispatch({type: GET_TRASHED_CARTRIDGE, payload: json})
    }
}