import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { addProduct } from '../../../redux/actions/productActions';
import '../../../styles/modals/vendor-modals/productForm.scss';

const ProductForm = () => {
	// const dispatch = useDispatch();
    const [product, setProduct] = useState({ 
        name: "", 
        product_type: "",
        details: "",
        cost: 0,
        stock: 0,
        product_pic_url: ""
    });

    const handleChange = (e) => {
		setProduct({ ...product, [e.target.name]: e.target.value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		// dispatch(addProduct(product));
	};
    return (
        <div className="product-form">
            Create a Product
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    value={product.name}
                onChange={handleChange}
                />
                <label>Type</label>
                <input
                    type="text"
                    name="product_type"
                    value={product.product_type}
                    onChange={handleChange}
                />
                <label>Details</label>
                <input
                    type="text"
                    name="details"
                    value={product.details}
                    onChange={handleChange}
                />
                <label>Cost</label>
                <input
                    type="number"
                    name="cost"
                    value={product.cost}
                    onChange={handleChange}
                />
                <label>Stock</label>
                <input
                    type="number"
                    name="stock"
                    value={product.stock}
                    onChange={handleChange}
                />
                <label>Image Url</label>
                <input
                    type="url"
                    name="product_pic_url"
                    value={product.product_pic_url}
                    onChange={handleChange}
                />
                <button type="submit">Create!</button>
            </form>
        </div>
    )
}

export default ProductForm;