import axios from 'axios'
import { returnErrors } from './messages'

import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL
} from './types'

// Check Token and Load User

export const loadUser = () => (dispatch, getState) => {
    // User Loading
    dispatch({type: USER_LOADING})

    // Get Token
    const token = getState().auth.token;

    const config = {
        headers: {
            'Content-Type': 'application/json' 
        }
    }

    // If Token, add to headers
    if (token) {
        config.headers['Authorization'] = `Token ${token}` 
    }

    axios.get('http://localhost:8000/api/auth/user', config)
    .then(res => {
        dispatch({
            type: USER_LOADED,
            payload: res.data
        })
    })
    .catch(
        err => {
            dispatch(returnErrors(err.response.data, err.response.status))
            dispatch({type: AUTH_ERROR})
        }
    )
}

// Login User
export const login = (username, password) => (dispatch) => {
    
    const config = {
        headers: {
            'Content-Type': 'application/json' 
        }
    }

    // Request Body
    const body = JSON.stringify({username, password})

    axios.post('http://localhost:8000/api/auth/login', body, config)
    .then(res => {
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })
    })
    .catch(
        err => {
            dispatch(returnErrors(err.response.data, err.response.status))
            dispatch({type: LOGIN_FAIL})
        }
    )
}
