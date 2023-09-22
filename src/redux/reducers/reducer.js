import { combineReducers } from "redux";
import usersReducer from "./UsersReducer";
import NumberReducer from "./NumberReducer";

export const rootReducer = combineReducers({
    usersReducer,
    NumberReducer
})