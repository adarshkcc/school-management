import { CHANGE_LANGUAGE } from "../../action/api/action-types";

const initialState={
    language:"en",
}

  const  ConfigReducers=(state=initialState,action)=>{
switch(action.type){
    case CHANGE_LANGUAGE:
        return {
            ...state,
            language:action.payload,
        }
        default:
            return state;
}
}
export default ConfigReducers;