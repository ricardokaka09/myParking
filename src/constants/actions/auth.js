import axios from 'axios'
// import setAuthToken from '../utils/setAuthToken'

import { REGISTER_SUCCESS,REGISTER_FAIL,LOGIN_FAIL,LOGIN_SUCCESS, LOGOUT, CLEAR_PROFILE } from '../types'

// SET AUTH
// export const loadUser = () => async dispatch=>{
//     if (localStorage.token) {
//         setAuthToken(localStorage.token)
//     }

//     try {
//         const res = await axios.get('/api/auth');
//         dispatch({
//             type: AUTH_LOADED,
//             payload: res.data
//         })
//     } catch (err) {
//         dispatch({
//             type: AUTH_ERROR,
    
//         })
//     }
// }
export const register = ({name, email,password}) => async dispatch => {
    const config = {
        headers: {
            "Content-Type": 'application/json'
        }
    }
    const body = JSON.stringify({name,email,password})
    console.log(body)
    try {
        const res = await axios.post('http://localhost:3000/api/users', body, config) 
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        })
        dispatch(loadUser())
        console.log(res.data)
    } catch (err) {
        // const errors = err.response.data.errors;
        console.log(err.mess);
        if(err){
        //    setAlert(err.mess, 'danger');
        console.log(err)
        }
        dispatch({
            type: REGISTER_FAIL,

        })
        // console.log(err.response.data)
    }
}

/*     Login     */
export const login = ({email,password}) => async dispatch => {
    const config = {
        headers: {
            "Content-Type": 'application/json'
        }
    }
    const body = JSON.stringify({email,password})
    console.log(body)
    try {
        const res = await axios.post('/api/auth', body, config)
        console.log(res);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })
        // dispatch(loadUser())
        console.log(res.data)
    } catch (err) {
        // const errors = err.response.data.errors;
        // if(errors){
        //     errors.forEach(err => dispatch(setAlert(err.message, 'danger')));
        // }
        dispatch({
            type: LOGIN_FAIL,
        })
        // console.log(err.response.data)
    }
}


/* --------Logout user----*/
export const logout = () => dispatch=>{
    console.log(!false)
    dispatch({
        type: LOGOUT,
    })
    dispatch({
        type: CLEAR_PROFILE,
    })
}