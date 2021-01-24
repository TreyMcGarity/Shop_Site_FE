import React from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import '../styles/header.css';

const Header = () => {
    return (
        <div className='header.css'>
            <div>
                <h1>DECOREM</h1>
                <Link to='/profile'>Profile</Link>
            </div>
            <div>
                <Link to='/listing'>Listing</Link>
                <form>
                    <inpt></inpt>
                </form>
            </div>
        </div>
    )
}

export default Header;