import {FETCH_USER, LOGIN_USER, LOGOUT_USER, SIGNUP_USER, UPLOAD_AVATAR, UPDATE_USER_PROFILE, ERROR} from '../actions/types'

const initialState = null
export const authReducer = (state=initialState, action) => {
    switch(action.type){
        case FETCH_USER :
            return action.payload
        default :
            return state
    }
}