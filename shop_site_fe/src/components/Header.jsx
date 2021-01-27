import React, { useState } from 'react';
// import { useDispatch } from "react-redux";
// import { getProduct } from '../redux/actions/productActions';
import Listing from './modals/Listing';
import Profile from './modals/Profile';
import Cart from './modals/Cart';
import SavedList from './modals/SavedList';
import Backdrop from '../utils/backdrop';
import menu from '../utils/images/hamburger-menu.png';
import account from '../utils/images/account.png';
import searchIcon from '../utils/images/search-icon.png';
import cart from '../utils/images/cart.png';
import heart from '../utils/images/heart.png';
import '../styles/header.css';

const Header = () => {
    const [listing, showListing] = useState(false);
    const [searching, showSearching] = useState(false);
    const [carting, showCarting] = useState(false);
    const [savedList, showSavedList] = useState(false);
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
            <div className="listingbtn" onClick={() => showListing(true)}>
                { listing ?
                    <div>
                        <Listing />
                        <Backdrop show={listing} set={showListing} /> 
                    </div>
                : <img className="menu" src={menu} alt="menu" /> }
            </div>
            <h1>DECOREM</h1>
            <div className="searchbtn" onClick={() => showSearching(true)}>
                { searching ?
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="email"
                        placeholder="search"
                        value={search}
                        onChange={handleChange}
                    />
                </form>
                : <img className="search-bar" src={searchIcon} alt="search-bar" /> }
            </div>
            <div className="cartbtn" onClick={() => showCarting(true)}>
                { savedList ?
                    <div>
                        <Cart />
                        <Backdrop show={carting} set={showCarting} /> 
                    </div>
                : <img className="cart" src={cart} alt="heart" /> }
            </div>
            <div className="favoritebtn" onClick={() => showSavedList(true)}>
                { savedList ?
                    <div>
                        <SavedList />
                        <Backdrop show={savedList} set={showSavedList} /> 
                    </div>
                : <img className="favs" src={heart} alt="heart" /> }
            </div>
            <div className="profilebtn" onClick={() => showProfile(true)}>
                { profile ?
                    <div>
                        <Profile />
                        <Backdrop  show={profile} set={showProfile} /> 
                    </div>
                : <img className="account" src={account} alt="head-shot" /> }
            </div>
        </div>
    )
}

export default Header;