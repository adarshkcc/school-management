import { combineReducers } from "redux";
import AuthReducers from "./auth";
import ConfigReducers from "./config";
export const rootReducer= combineReducers({
auth:AuthReducers,
config:ConfigReducers,
})