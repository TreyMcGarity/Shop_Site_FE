import React, { useEffect } from "react";
import { getProducts } from '../../../redux/actions/productActions';
import { connect, useDispatch } from "react-redux";
import Product from '../segments/Product';
import Header from '../segments/Header';
import Footer from '../segments/Footer';
import '../../../styles/pages/patron-pages/products.scss';

const Products = props => {
    const dispatch = useDispatch();

    useEffect(() => {
		dispatch(getProducts())
	}, [dispatch]);

    // products need a selected and saved flag that is tied to profile and relational to the listing
    return (
        <div>
            <Header />
            <div className='products'>
                {props.products.product_data ? props.products.product_data.map((p, i) => {
                    return <Product key={i} product={p} />
                }) : <p>No products</p>}
            </div>
            <Footer />
        </div>
    )
}

const mapping = (state) => {
    return {
        products: state.product,
    }
}

export default connect(mapping)(Products);