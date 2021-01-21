import {
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from '../actions/type';

const initialState = {
    loggedIn: false,
    isFetching: false,
    info_data: {}
}

const authReducer = (state = initialState, action) => {
	switch (action.type) {
        case REGISTER_SUCCESS:
            return {
                ...state,
                isFetching: false,
                loggedIn: true,
                data : action.payload,
            };
        case REGISTER_FAILURE:
            return {
                ...state,
                isFetching: false,
                loggedIn: true,
                data : action.payload,
            };  
        case LOGIN_SUCCESS:
            return {
                ...state,
                isFetching: false,
                loggedIn: true,
                data : action.payload,
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                isFetching: false,
                loggedIn: true,
                data : action.payload,
            };           
        default:
            return state;
    }
};

export default authReducer;