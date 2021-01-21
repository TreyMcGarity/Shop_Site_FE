import {
    GET_PRODUCTS,
    GET_PRODUCT,
    ADD_PRODUCT,
    UPDATE_PRODUCT,
    DELETE_PRODUCT
} from '../actions/type';

const initialState = {
}

const productReducer = (state = initialState, action) => {
	switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
            };
        case GET_PRODUCT:
            return {
                ...state,
            };  
        case ADD_PRODUCT:
            return {
                ...state,
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