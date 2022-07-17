import { LOGOUT, USER_AUTHENTICATION } from "../../action/api/action-types";

const initialState = {
  isAuthenticated: false,
};

const AuthReducers = (state = initialState, action) => {
  switch (action.type) {
    case USER_AUTHENTICATION:
      return {
        ...state,
        isAuthenticated: action.payload,
      };
    case LOGOUT:
      return {
        state: undefined,
      };
    default:
      return state;
  }
};
export default AuthReducers;
