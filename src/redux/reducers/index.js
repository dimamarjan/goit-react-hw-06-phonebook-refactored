import { combineReducers } from "redux";
import itemReducer from "redux/reducers/itemReducer";
import filterReducer from "redux/reducers/filterReducer"

export const rootReducer = combineReducers({
    items: itemReducer,
    filter: filterReducer
});