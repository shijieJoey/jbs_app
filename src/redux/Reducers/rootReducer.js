import { combineReducers } from "redux";
import { characterReducer } from "./characterReducer";

export const rootReducer = combineReducers({
    character: characterReducer 
});
