import { combineReducers } from 'redux'
import { modelReducer } from './modelReducer'
import { subdivisionReducer } from './subdivisionReducer'
import { trashCartridgeReducer } from './trashCartridgeReducer'


export const rootReducer = combineReducers({    //combineReducers используется для объединения различных редюсеров
    subdivision: subdivisionReducer,
    modelCartridges: modelReducer,
    trashCandidate: trashCartridgeReducer
})