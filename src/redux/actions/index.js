
import axios from 'axios';
import {FETCH_USER, LOGIN_USER, LOGOUT_USER, SIGNUP_USER, UPLOAD_AVATAR, UPDATE_USER_PROFILE, ERROR} from './types'

export const fetchUser = (token) => async (dispatch) => {
    const token = localStorage.getItem('stUserToken')
    try {
        const res = await axios.get('/api/users/profile', {
            headers:{
                'Authorization': `Bearer ${token}`
            }
        });
      
        dispatch({type : FETCH_USER, payload : res.data})
    } catch (error) {
        return
    }
}