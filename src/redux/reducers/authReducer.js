import {FETCH_USER, LOGIN_USER, LOGOUT_USER, SIGNUP_USER, UPLOAD_AVATAR, UPDATE_USER_PROFILE} from '../actions/types'

const initialState = null
export const authReducer = (state=initialState, action) => {
    switch(action.type){
        case FETCH_USER :
            return action.payload
        case SIGNUP_USER : 
            return action.payload 
        case LOGIN_USER : 
            return action.payload
        case LOGOUT_USER : 
            return action.payload
        case UPLOAD_AVATAR : 
            return action.payload || state
        case UPDATE_USER_PROFILE : 
            return action.payload || state 
        default :
            return state
    }
}