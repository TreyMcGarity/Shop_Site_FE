import React, { useState } from 'react';
// import { useDispatch } from "react-redux";
// import { getProduct } from '../redux/actions/productActions';
import Listing from './modals/Listing';
import Search from './modals/Search';
import Profile from './modals/Profile';
import Cart from './modals/Cart';
import SavedList from './modals/SavedList';
import Backdrop from '../utils/backdrop';
import menu from '../utils/images/hamburger-menu.png';
import account from '../utils/images/profile-.png';
import searchIcon from '../utils/images/search-icon.png';
import otherSearchIcon from '../utils/images/search-icon-other.png';
import cart from '../utils/images/cart-.png';
import heart from '../utils/images/fav-heart.png';
import '../styles/header.css';

const Header = () => {
    // const dispatch = useDispatch();
    const [listing, showListing] = useState(false);
    const [searching, showSearching] = useState(false);
    const [search, setSearch] = useState("");
    const [carting, showCarting] = useState(false);
    const [savedList, showSavedList] = useState(false);
    const [profile, showProfile] = useState(false);
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
                    <div>
                        <Search 
                            search={search} 
                            handleChange={handleChange}
                            handleSubmit={handleSubmit}
                            showSearching={showSearching}
                        />
                        <Backdrop show={searching} set={showSearching} />
                    </div>
                : <img className="search-bar" src={searchIcon} alt="search-bar" /> }
            </div>
            <div className="cartbtn" onClick={() => showCarting(true)}>
                { carting ?
                    <div>
                        <Cart />
                        <Backdrop show={carting} set={showCarting} /> 
                    </div>
                : <img className="cartpic" src={cart} alt="heart" /> }
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