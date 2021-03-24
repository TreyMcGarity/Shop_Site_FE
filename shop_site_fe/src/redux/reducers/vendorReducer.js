import {
    GET_VENDORS_PROFILES,
    GET_VENDOR_PROFILE,
    GET_PATRONS_PROFILES,
    ADD_VENDOR_PROFILE,
    UPDATE_VENDOR_PROFILE,
    DELETE_VENDOR_PROFILE
} from '../actions/type';

const initialState = {
    vendor_data: {},
}

const productReducer = (state = initialState, action) => {
	switch (action.type) {
        case GET_VENDORS_PROFILES:
            return {
                ...state,
                vendor_data: action.payload
            };
        case GET_VENDOR_PROFILE:
            return {
                ...state,
            };  
        case GET_PATRONS_PROFILES:
            return {
                ...state,
            };
        case ADD_VENDOR_PROFILE:
            return {
                ...state,
                vendor_data: action.payload
            };    
        case UPDATE_VENDOR_PROFILE:
            return {
                ...state,
            };
        case DELETE_VENDOR_PROFILE:
            return {
                ...state,
            };       
        default:
            return state;
    }
};

export default productReducer;