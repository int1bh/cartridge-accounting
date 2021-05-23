import { combineReducers } from "redux";
import { allCartridgeReducer } from "./allCartridgeReducer";

export const rootReducer = combineReducers({    //combineReducers используется для объединения различных редюсеров
    allCartridges: allCartridgeReducer
})