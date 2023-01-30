import React, { useEffect } from "react";
import Header from '../segments/Header';
import Footer from '../segments/Footer';
import Product from '../segments/Product';
import { connect, useDispatch } from "react-redux";
import { getProducts } from '../../../redux/actions/productActions';
import Group from '../../../utils/images/home/group_setting.jpg';
import Model1 from '../../../utils/images/home/models/mode_1.jpg';
import '../../../styles/pages/patron-pages/home.scss';

const Home = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
		dispatch(getProducts())
	}, []);
        
    return (
        <>
        <Header />
        <div className='home'>
            {/* <div className='promo'>
                <h1>Free Shipping on Orders over $30</h1>
                <p>Must have an account to access incredible deal offer!</p>
            </div> */}
            <img src={Group} alt='group setting'/>
            <div className='model'>
                <img src={Model1} alt='model with peace sign'/>
            </div>
            <div className='products'>
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