import React from 'react';
import Header from '../../Header';
import Footer from '../../Footer';
import { connect, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import '../../../styles/pages/home.scss';

const Home = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);

    console.log(state)
    return (
        <>
        <Header />
        <div className='home'>
            Home
        </div>
        <Footer />
        </>
    )
}

const mapping = (state) => {
    return {
        state: state,
    }
}

export default connect(mapping)(Home);