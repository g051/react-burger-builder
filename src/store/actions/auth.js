import * as actionTypes from './actionTypes';
import axios from 'axios';

export const authStart = () => ({ type: actionTypes.AUTH_START });
export const authSuccess = (token, userId) => ({ type: actionTypes.AUTH_SUCCESS, token, userId });
export const authFail = error => ({ type: actionTypes.AUTH_FAIL, error });

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('userId');
    return {
        type: actionTypes.AUTH_LOGOUT
    }
};

export const checkAuthTimeout = expireationTime => dispatch => {
    setTimeout(() => {
        dispatch(logout());
    }, expireationTime);
};

export const auth = (email, password, isSignup) => dispatch => {
    dispatch(authStart());

    const apiKey = 'AIzaSyB2DZbCvcL1D2-Jx8RoFfxYLfliKQygRaU';
    let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=';
    if (!isSignup) {
        url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=';
    }
    url += apiKey;

    const authData = {
        email,
        password,
        returnSecureToken: true
    };

    axios.post(url, authData)
        .then(res => {
            const expirationDate = new Date(new Date().getTime() + res.data.expiresIn * 1000);
            localStorage.setItem('token', res.data.idToken);
            localStorage.setItem('expirationDate', expirationDate);
            localStorage.setItem('userId', res.data.localId);

            dispatch(authSuccess(res.data.idToken, res.data.localId));
            dispatch(checkAuthTimeout(res.data.expiresIn * 1000));
        })
        .catch(err => {
            dispatch(authFail(err.response.data.error));
        })
};

export const setAuthRedirect = path => ({ type: actionTypes.SET_AUTH_REDIRECT, path });

export const authCheckState = () => dispatch => {
    const token = localStorage.getItem('token');
    if (token) {
        const expirationDate = new Date(localStorage.getItem('expirationDate'));
        if (expirationDate <= new Date()) {
            dispatch(logout());
        } else {
            const userId = localStorage.getItem('userId');
            dispatch(authSuccess(token, userId));
            dispatch(checkAuthTimeout(expirationDate - new Date()));
        }
    }
};