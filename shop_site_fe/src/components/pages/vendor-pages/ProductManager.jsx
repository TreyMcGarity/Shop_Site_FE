import React, { useState, useEffect } from 'react';
import { connect, useDispatch, useSelector } from "react-redux";
import { getProducts, getProduct } from '../../../redux/actions/productActions';
import ProductForm from '../../modals/vendor-modals/ProductForm';
import Backdrop from '../../../utils/backdrop';
import '../../../styles/pages/vendor-pages/productManager.scss';

const ProductManager = (props) => {
    const [creating, isCreating] = useState(false);
    const state = useSelector((state) => state.product);
    const dispatch = useDispatch();
    console.log(state)
	useEffect(() => {
		dispatch(getProducts());
	}, []);

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

const mapping = (state) => {
    return {
        product: state,
        product_list: state.product.product_list
    }
}

export default connect(mapping)(ProductManager);