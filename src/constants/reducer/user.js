import { REGISTER_SUCCESS,REGISTER_FAIL,LOGIN_FAIL,LOGIN_SUCCESS, LOGOUT ,AUTH_LOADED} from '../types'
const initialState = {
    // token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading:true,
    userInfo: null
}

export default function(state = initialState,action){
    const {type,payload} = action
    switch(type){
        case AUTH_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                userInfo: payload
            }
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            // localStorage.setItem('token', payload.token)
            return {
                ...state,
                userInfo: payload,
                isAuthenticated: true,
                loading: false
            }
        case REGISTER_FAIL:
        case LOGIN_FAIL:
        case LOGOUT:
            return {
                ...state,
                isAuthenticated: false,
                loading: false,
                userInfo: null
            }
        default :
            return state;
    }
}