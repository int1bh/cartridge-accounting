export const GET_TRASHED_CARTRIDGE = 'GET_TRASHED_CARTRIDGE'
export const LOADING = 'LOADING'
export const LOADED = 'LOADED'
export const ERROR = 'ERROR'

export function getCartridge(barcode) {
    
    return async dispatch => {
        try {
            dispatch({type: LOADING})
            const response = await fetch('/api/getone?barcode='+barcode)
        const json = await response.json()
        dispatch({type: GET_TRASHED_CARTRIDGE, payload: json})
        dispatch({type: LOADED})
        } catch (error) {
            dispatch({type: ERROR})
        }
        
    }
}