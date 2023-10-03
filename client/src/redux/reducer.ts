import { ActionRedux, GlobalState } from "../types";
import { ERROR, GET_ALL_TASK, GET_TASK, LOGOUT, RESET_ERROR, SING_IN_SING_UP } from "./actions";

const initialState:GlobalState = {
    user: null,
    isAuth: false,
    errors: null,
    loading: true,
    allTask: [],
    taskDetail: null
}

function rootReducer(state=initialState, action:ActionRedux){
    switch(action.type){
        case SING_IN_SING_UP:
            return{
                ...state,
                user: action.payload,
                isAuth: true,
                loading: false
            }
        case LOGOUT:
            return{
                ...state,
                user: null,
                isAuth: false,
                loading: false
            }
        case GET_ALL_TASK:
            return{
                ...state,
                allTask: action.payload
            }
        case GET_TASK:
            return{
                ...state,
                taskDetail: action.payload
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