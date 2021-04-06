import {
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAILURE,
    GET_PRODUCT_SUCCESS,
    GET_PRODUCT_FAILURE,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_FAILURE,
    UPDATE_PRODUCT_SUCCESS,
    UPDATE_PRODUCT_FAILURE,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_FAILURE
} from '../actions/type';

const initialState = {
    product_list: [],
    product_data: {},
}

const productReducer = (state = initialState, action) => {
	switch (action.type) {
        //RETRIEVE METHODS
        case GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                product_list: [...action.payload]
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
            
        //MODIFY METHODS
        case ADD_PRODUCT_SUCCESS:
            return {
                ...state,
                product_data: action.payload
            };
        case ADD_PRODUCT_FAILURE:
            return {
                ...state,
                error: action.payload
            };

        case UPDATE_PRODUCT_SUCCESS:
            return {
                ...state,
                product_data: action.payload
            }; 
        case UPDATE_PRODUCT_FAILURE:
            return {
                ...state,
                error: action.payload
            };    

        case DELETE_PRODUCT_SUCCESS:
            return {
                ...state,
                product_list: [...action.payload]

            }; 
        case DELETE_PRODUCT_FAILURE:
            return {
                ...state,
                error: action.payload
            };    

        default:
            return state;
    }
};

export default productReducer;