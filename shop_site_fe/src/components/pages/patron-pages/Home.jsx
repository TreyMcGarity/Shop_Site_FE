import React, { useEffect } from "react";
import Header from '../segments/Header';
import Footer from '../segments/Footer';
import Product from '../segments/Product';
import Carousel from 'react-elastic-carousel';
import CarouselItem from './CarouselItem';
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

    const breakPoints = [
        {width: 1, itemsToShow: 3},
        {width: 550, itemsToShow: 5},
        {width: 768, itemsToShow: 7},
        {width: 1000, itemsToShow: 9},
        {width: 1200, itemsToShow: 11},
        {width: 1400, itemsToShow: 13},
    ]
        
    return (
        <>
        <Header />
        <div className='home'>
            <div className='promo'>
                <h1>Free Shipping on Orders over $30</h1>
                <p>Must have an account to access incredible deal offer!</p>
            </div>
            <img src={Group} alt='group setting'/>
            <Carousel className='carousel' breakPoints={breakPoints}>
                <CarouselItem text='New Decor Arrivals' />
                <CarouselItem text='New Cloths Arrivals' />
                <CarouselItem text='Popular Decor' />
                <CarouselItem text='Aesthetic Decor' />
                <CarouselItem text='Women Tops' />
                <CarouselItem text='Women Pants' />
                <CarouselItem text='Men Tops' />
                <CarouselItem text='Men Pants' />
                <CarouselItem text='Pottery' />
                <CarouselItem text='Table Tops' />
                <CarouselItem text='Wall Decor' />
                <CarouselItem text='Jewelry' />
                <CarouselItem text='Spring Collection' />
                <CarouselItem text='Summer Collection' />
                <CarouselItem text='Autumn Collection' />
                <CarouselItem text='Winter Collection' />
            </Carousel>
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