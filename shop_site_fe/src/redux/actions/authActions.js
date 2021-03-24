import apiCall from '../../utils/api';
import {
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from '../actions/type';

//authentication methods for both user types
export const register = (data) => (dispatch) => {
    return apiCall()
        .post(`${process.env.REACT_APP_BACKEND}/auth/register?user_type=${data.user_type}`, data)
        .then((res) => {
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            })
            return res;
        })
        .catch((err) => {
            dispatch({
                type: REGISTER_FAILURE,
                payload: err.response
            })
        })
};

export const login = (data) => (dispatch) => {
    return apiCall()
    .post(`${process.env.REACT_APP_BACKEND}/auth/login?user_type=${data.user_type}`, data)
    .then((res) => {
        if (data.user_type === 'patron') { window.location = '/home' } 
        if (data.user_type === 'vendor') { window.location = '/dashboard' }
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })
        return res;
    })
    .catch((err) => {
        dispatch({
            type: LOGIN_FAILURE,
            payload: err.response
        })
    })
}
