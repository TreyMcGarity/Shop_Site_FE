import React, { useState } from 'react';
import ProductForm from '../../modals/vendor-modals/ProductForm';
import Backdrop from '../../../utils/backdrop';
import '../../../styles/pages/vendor-pages/productManager.scss';

const ProductManager = () => {
    const [creating, isCreating] = useState(false)
    //useEffect to grab updated list of products

    return (
    <div className='product-manager-page'>
        <div className="creating-btn" onClick={() => isCreating(true)}>
            <h1>Product Manager</h1>
            { creating ?
                <div>
                    <ProductForm />
                    <Backdrop show={creating} set={isCreating} /> 
                </div>
            : "Create Product" }
        </div>
    </div>
    )
}

export default ProductManager;