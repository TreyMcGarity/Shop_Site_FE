import React, { useState } from 'react';
// import { useDispatch } from "react-redux";
// import { getProduct } from '../redux/actions/productActions';
import Listing from './modals/Listing';
import Profile from './modals/Profile';
import Backdrop from '../utils/backdrop';
import '../styles/header.css';

const Header = () => {
    const [listing, showListing] = useState(false);
    const [profile, showProfile] = useState(false);
    // const dispatch = useDispatch();
    const [search, setSearch] = useState("");
	const handleChange = (e) => {
		setSearch({ ...search, [e.target.name]: e.target.value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		// dispatch(getProduct(search));
	};
    return (
        <div className='header'>
            <div>
                <h1>DECOREM</h1>
                <div className="listingbtn" onClick={() => showListing(true)}>
                    { listing ?
                        <div>
                            <Listing />
                            <Backdrop show={listing} set={showListing} /> 
                        </div>
                    : "Shop" }
                </div>
            </div>
            <div>
                <div className="profilebtn" onClick={() => showProfile(true)}>
                    { profile ?
                        <div>
                            <Profile />
                            <Backdrop show={profile} set={showProfile} /> 
                        </div>
                    : "Profile" }
                </div>
                <form onSubmit={handleSubmit}>
                    <input
						type="text"
                        name="email"
                        placeholder="search"
						value={search}
						onChange={handleChange}
					/>
                </form>
            </div>
        </div>
    )
}

export default Header;