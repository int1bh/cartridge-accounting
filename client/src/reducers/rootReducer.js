import { combineReducers } from 'redux'
import { subdivisionReducer } from './subdivisionReducer'


export const rootReducer = combineReducers({    //combineReducers используется для объединения различных редюсеров
    subdivision: subdivisionReducer
})