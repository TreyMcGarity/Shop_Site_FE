import {
    GET_PATRON_PROFILE,
    ADD_PATRON_PROFILE,
    UPDATE_PATRON_PROFILE,
    DELETE_PATRON_PROFILE,

} from '../actions/type';

const initialState = {
    patron_data: {},
}

const productReducer = (state = initialState, action) => {
	switch (action.type) {
        case GET_PATRON_PROFILE:
            return {
                ...state,
                patron_data: action.payload
            };
        case ADD_PATRON_PROFILE:
            return {
                ...state,
                patron_data: action.payload
            };  
        case UPDATE_PATRON_PROFILE:
            return {
                ...state,
            };
        case DELETE_PATRON_PROFILE:
            return {
                ...state,
            };    
        default:
            return state;
    }
};

export default productReducer;