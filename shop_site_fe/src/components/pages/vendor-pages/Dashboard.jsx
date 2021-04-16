import React from 'react';
import { connect, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import '../../../styles/pages/vendor-pages/dashboard.scss';

const Dashboard = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    
    return (
        <div className='dashboard'>
            <h1>Admin Dashboard</h1>
            <div className='dash-menu'>
                <Link 
                    className='btn product-btn' 
                    to='product-manager'>
                        Product Manager
                </Link>
                <Link 
                    className='btn order-btn' 
                    to='order-manager'>
                        Order Manager
                </Link>
                <Link 
                    className='btn user-btn' 
                    to='user-manager'>
                        User Manager
                </Link>
            </div>
        </div>
    )
}

const mapping = (state) => {
    return {
        state: state,
    }
}

export default connect(mapping)(Dashboard);