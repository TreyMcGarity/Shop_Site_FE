import { combineReducers } from 'redux';
import authReducer from './authReducer';
import patronReducer from './patronReducer';
import productReducer from './productReducer';
import vendorReducer from './vendorReducer';

export default combineReducers({
    auth: authReducer,
    patron: patronReducer,
    product: productReducer,
    vendor: vendorReducer
});