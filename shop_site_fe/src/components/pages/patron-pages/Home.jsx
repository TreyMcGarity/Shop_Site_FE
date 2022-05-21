import React, { useEffect } from "react";
import Header from '../segments/Header';
import Footer from '../segments/Footer';
import Product from '../segments/Product';
import { connect, useDispatch } from "react-redux";
import { getProducts } from '../../../redux/actions/productActions'
import '../../../styles/pages/home.scss';

const Home = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
		dispatch(getProducts())
	}, []);

    console.log("products:",props.products.product_data)
    return (
        <>
        <Header />
        <div className='home'>
            <div className="products">
                {props.products.product_data ? props.products.product_data.map((p, i) => {
                    return <Product key={i} product={p} />
                }) : <p>No products</p>}
            </div>
        </div>
        <Footer />
        </>
    )
}

const mapping = (state) => {
    return {
        products: state.product,
    }
}

export default connect(mapping)(Home);