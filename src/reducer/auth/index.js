import { USER_AUTHENTICATION } from "../../action/api/action-types"

const initialState={
    isAuthenticated:false,
}

  const  AuthReducers=(state=initialState,type)=>{
switch(type){
    case USER_AUTHENTICATION:
        return {
            ...state,
            isAuthenticated:true,
        }
        default:
            return state;
}
}
export default AuthReducers;