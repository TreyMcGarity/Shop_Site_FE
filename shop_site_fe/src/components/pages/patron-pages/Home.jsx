import React from "react";
import Header from '../segments/Header';
import Footer from '../segments/Footer';
import Group from '../../../utils/images/home/group_setting.jpg';
import House from '../../../utils/images/home/house.png';
import Plant from '../../../utils/images/home/plant.png';
import Shirt from '../../../utils/images/home/shirt.png';
import Pants from '../../../utils/images/home/joggers.png';
import Picture from '../../../utils/images/home/picture.png';
import Model1 from '../../../utils/images/home/models/mode_1.jpg';
import '../../../styles/pages/patron-pages/home.scss';

const Home = () => {
    return (
        <>
        <Header />
        <div className='home'>
            <div className='promo'>
                <h1>Free Shipping on Orders over $50</h1>
                <p>Must have an account to access incredible deal offer!</p>
            </div>
            <img src={Group} alt='group setting'/>
            <div className='icon-menu'>
                <img className='icon' src={Plant} alt='plants icon' />
                <img className='icon' src={Picture} alt='painting icon' />
                <img className='icon' src={House} alt='house icon' />
                <img className='icon' src={Shirt} alt='shirt icon' />
                <img className='icon' src={Pants} alt='Pants icon' />
            </div>
            <div className='model'>
                <img src={Model1} alt='model with peace sign'/>
            </div>

        </div>
        <Footer />
        </>
    )
}

export default Home;