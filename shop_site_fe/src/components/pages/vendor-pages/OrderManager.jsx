import React from 'react';
import { connect, useDispatch, useSelector } from "react-redux";
import '../../../styles/pages/vendor-pages/orderManager.scss';

const OrderManager = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);

    return (
        <div className='order-manager-page'>
            <h1>Order Manager</h1>
        </div>
    )
}

const mapping = (state) => {
    return {
        state: state,
    }
}

export default connect(mapping)(OrderManager);