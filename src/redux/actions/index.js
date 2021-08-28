
import axios from 'axios';
import {FETCH_USER, LOGIN_USER, LOGOUT_USER, SIGNUP_USER, UPLOAD_AVATAR, UPDATE_USER_PROFILE} from './types'

export const fetchUser = () => async (dispatch) => {
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
export const signupUser = (details, history) => async (dispatch) => {
    try {
        const res = await axios.post('/api/users', details)
        dispatch({type : SIGNUP_USER, payload : res.data.user})
        localStorage.setItem('stUserToken', res.data.token)
        history.push('/dashboard')
        return {success:true}
    } catch (error) {
        //window.alert(`error: ${error}`)
        return {success:false}
    }
}
export const loginUser = (details, history) => async (dispatch) => {
    try {
        const res = await axios.post('/api/users/login', details);
        dispatch({type : LOGIN_USER, payload : res.data.user});
        localStorage.setItem('stUserToken', res.data.token)
        history.push('/dashboard');
        return {success:true}
    } catch (error) {
        //window.alert(`error: ${error}`)
        return {success:false}
    }
}

export const logoutUser = (history) => async (dispatch) => {
    const token  = localStorage.getItem('stUserToken')
    
    try {
        const res = await axios.post('/api/users/logout', null, {
            headers:{
                'Authorization': `Bearer ${token}`
            }
        });
        dispatch({type : LOGOUT_USER, payload : res.data});
        localStorage.removeItem('stUserToken')
        history.push('/confirm');
    } catch (error) {
        window.alert(`error: ${error}`)
    }
}

export const uploadAvatar = (formData) => async (dispatch) => {
    const token  = localStorage.getItem('stUserToken')

    try {
        const res = await axios.post('/api/users/profile/avatar', formData, {
            headers:{
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'multipart/form-data',
                'Accept' : 'multipart/form-data'
            }
        });
        dispatch({type : UPLOAD_AVATAR, payload : res.data});
        return {success:true}
    } catch (error) {
        //window.alert(`error: ${error}`)
        return {success:false}
    }
}

export const updateUserProfile = (details) => async (dispatch) => {
    const token  = localStorage.getItem('stUserToken')
    try {
        const res = await axios.patch('/api/users/profile/update', details, {
            headers:{
                'Authorization': `Bearer ${token}`
            }
        })
        dispatch({type : UPDATE_USER_PROFILE, payload : res.data})
        return {success:true}
    } catch (error) {
        //window.alert(`error: ${error}`)
        return {success:false}
    }
}