import React, {useState } from 'react';
import ProductForm from '../../modals/vendor-modals/ProductForm';
import Backdrop from '../../../utils/backdrop';
import '../../../styles/pages/dashboard.scss';

const Dashboard = () => {
    const [creating, isCreating] = useState(false)
    return (
        <div className='dashboard'>
            <div className="creating-btn" onClick={() => isCreating(true)}>
                { creating ?
                    <div>
                        <ProductForm />
                        <Backdrop show={creating} set={isCreating} /> 
                    </div>
                : "Create Product" }
            </div>
            Dashboard
        </div>
    )
}

export default Dashboard;