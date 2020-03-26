import { combineReducers } from 'redux';
import authReducer from './authReducer';
import PropertyReducer from './propertyReducer';

export default combineReducers({
    auth: authReducer,
    property: PropertyReducer
});