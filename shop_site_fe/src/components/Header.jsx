import React from 'react';
import Listing from './modals/Listing';
import Profile from './modals/Profile';
import { connect } from "react-redux";

const Header = () => {
    return (
        <div>
            App Logo | <img src='' alt='cart'/> | <a href='#'>Profile</a>
            
            <button>Listing</button> | search field
        </div>
    )
}

const mapState = state => {
    return {
		state: state.products.data, 
	};
}

export default connect(mapState, Header);