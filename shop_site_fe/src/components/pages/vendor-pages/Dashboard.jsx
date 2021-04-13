import React from 'react';
import { Link } from "react-router-dom";
import '../../../styles/pages/vendor-pages/dashboard.scss';

const Dashboard = () => {
    
    return (
        <div className='dashboard'>
            Dashboard
            <div className='dash-menu'>
                <Link className='btn product-btn' to='product-manager'>Product Manager</Link>
                <Link className='btn order-btn' to='order-manager'>Order Manager</Link>
                <Link className='btn user-btn' to='user-manager'>User Manager</Link>
            </div>
        </div>
    )
}

export default Dashboard;