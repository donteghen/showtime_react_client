import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import  mobileViewReducer  from "./mobileViewReducer";
export const reducer = combineReducers({
    auth:authReducer,
    mobileView:mobileViewReducer
})