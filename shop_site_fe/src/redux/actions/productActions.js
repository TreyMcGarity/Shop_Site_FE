import axios from 'axios';
import {
    GET_PRODUCTS_SUCCCESS,
    GET_PRODUCTS_FAILURE,
    GET_PRODUCT_SUCCCESS,
    GET_PRODUCT_FAILURE,
} from '../actions/type';


export const getProducts = () => (dispatch) => {
    axios
    .get(`/client/me`)
    .then((res) => {
        dispatch({
            type: GET_PRODUCTS_SUCCCESS,
            payload: res.data,
        });
    })
    .catch((err) => {
        dispatch({
            type: GET_PRODUCTS_FAILURE,
            payload: err.message,
        });
    });
};

export const getProduct = () => (dispatch) => {
    axios
    .get(`/client/me`)
    .then((res) => {
        dispatch({
            type: GET_PRODUCT_SUCCCESS,
            payload: res.data,
        });
    })
    .catch((err) => {
        dispatch({
            type: GET_PRODUCT_FAILURE,
            payload: err.message,
        });
    });
};

/*
export default add = (data) => (dispatch) => {
}

export default update = (data) => (dispatch) => {
}

export default delete = (data) => (dispatch) => {
}
*/