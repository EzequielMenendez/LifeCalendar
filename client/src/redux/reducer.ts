import { ActionRedux, GlobalState } from "../types";

const initialState:GlobalState = {
    user: null,
    isAuth: false,
    errors: null
}

function rootReducer(state=initialState, action:ActionRedux){
    switch(action.type){

        default:
            return state
    }
}

export default rootReducer