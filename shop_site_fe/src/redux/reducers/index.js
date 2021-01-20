import { combineReducers } from 'redux';
import patronReducer from './patronReducer';
import productReducer from './productReducer';
import vendorReducer from './vendorReducer';

export default combineReducers({
    patron: patronReducer,
    product: productReducer,
    vendor: vendorReducer
});