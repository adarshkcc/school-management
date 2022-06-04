import { combineReducers } from "redux";
import AuthReducers from "./auth";
import ConfigReducers from "./config";
import ThemeReducer from "./theme";
export const rootReducer = combineReducers({
  auth: AuthReducers,
  config: ConfigReducers,
  theme: ThemeReducer,
});
