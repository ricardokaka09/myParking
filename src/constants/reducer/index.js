import { combineReducers } from 'redux'
import user from './user'
import parking from './parking'

export default combineReducers({
    user,
    parking,
})