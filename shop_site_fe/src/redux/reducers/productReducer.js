import {
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAILURE,
    GET_PRODUCT_SUCCESS,
    GET_PRODUCT_FAILURE,
    ADD_PRODUCT,
    UPDATE_PRODUCT,
    DELETE_PRODUCT
} from '../actions/type';

const initialState = {
    product_data: {},
}

const productReducer = (state = initialState, action) => {
	switch (action.type) {
        case GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                product_data: action.payload
            };
        case GET_PRODUCTS_FAILURE:
            return {
                ...state,
                error: action.payload
            };  
        case GET_PRODUCT_SUCCESS:
            return {
                ...state,
                product_data: action.payload
            };
        case GET_PRODUCT_FAILURE:
            return {
                ...state,
                error: action.payload
            };  
        case ADD_PRODUCT:
            return {
                ...state,
                product_data: action.payload
            };
        case UPDATE_PRODUCT:
            return {
                ...state,
            };    
        case DELETE_PRODUCT:
            return {
                ...state,
            };       
        default:
            return state;
    }
};

export default productReducer;