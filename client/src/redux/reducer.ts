import { ActionRedux, GlobalState } from "../types";
import { ERROR, LOGOUT, RESET_ERROR, SING_IN_SING_UP } from "./actions";

const initialState:GlobalState = {
    user: null,
    isAuth: false,
    errors: null
}

function rootReducer(state=initialState, action:ActionRedux){
    switch(action.type){
        case SING_IN_SING_UP:
            return{
                ...state,
                user: action.payload,
                isAuth: true,
            }
        case LOGOUT:
            return{
                ...state,
                user: null,
                isAuth: false
            }
        case RESET_ERROR:
            return{
                ...state,
                errors: null
            }
        case ERROR:
            return{
                ...state,
                errors: action.payload
            }
        default:
            return state
    }
}

export default rootReducer