import { combineReducers } from "redux";
import { SchoolManagementApi } from "../apis/schoolManagementApi";
import authReducer from "./authReducer";

import ConfigReducers from "./config";
import ThemeReducer from "./theme";
export const rootReducer = combineReducers({
  [SchoolManagementApi.reducerPath]: SchoolManagementApi.reducer,
  auth: authReducer,
  config: ConfigReducers,
  theme: ThemeReducer,
});
