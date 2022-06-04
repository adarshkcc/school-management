import { CHANGE_THEME } from "../../action/api/action-types";

const initialState = {
  colorIndex: 0,
};
const ThemeReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        colorIndex: action.payload,
      };
    default:
      return state;
  }
};
export default ThemeReducer;
