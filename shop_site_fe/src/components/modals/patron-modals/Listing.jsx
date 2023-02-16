import React from 'react';
import { Link } from "react-router-dom";
import '../../../styles/modals/patron-modals/listing.scss';

const Listing = () => {
    return (
        <div className='listing'>
            <Link to='/home' className='options'>Home</Link>
            <Link to='/browsing' className='options'>Browse</Link>
            <Link to='/browsing' className='options'>New</Link>
            <Link to='/browsing' className='options'>Popular</Link>
            <Link to='/browsing' className='options'>Wall Art</Link>
            <Link to='/browsing' className='options'>Collections</Link>
        </div>
    )
}

export default Listing;