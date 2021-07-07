import { combineReducers } from 'redux'
import { modelReducer } from './modelReducer'
import { subdivisionReducer } from './subdivisionReducer'
import { trashCartridgeReducer } from './trashCartridgeReducer'
import { issueCartridgeReducer } from './operationsReducers'


export const rootReducer = combineReducers({    //combineReducers используется для объединения различных редюсеров
    subdivision: subdivisionReducer,
    modelCartridges: modelReducer,
    trashCandidate: trashCartridgeReducer,
    issueCandidate: issueCartridgeReducer,
    acceptCandidate: issueCartridgeReducer
})