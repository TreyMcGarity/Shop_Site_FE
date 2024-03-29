import React, { useState } from 'react';
// import { useDispatch } from "react-redux";
// import { getProduct } from '../redux/actions/productActions';
import Listing from './modals/patron-modals/Listing';
import Search from './modals/patron-modals/Search';
import Profile from './modals/patron-modals/Profile';
import Cart from './modals/patron-modals/Cart';
import SavedList from './modals/patron-modals/SavedList';
import Backdrop from '../utils/backdrop';
import menu from '../utils/images/header/hamburger-menu.png';
import account from '../utils/images/header/profile-.png';
import searchIcon from '../utils/images/header/search-icon.png';
import cart from '../utils/images/header/cart-.png';
import heart from '../utils/images/header/fav-heart.png';
import '../styles/header.scss';

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
                : <img className="menu header-link" src={menu} alt="menu" /> }
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
                : <img className="search-bar header-link" src={searchIcon} alt="search-bar" /> }
            </div>
            <div className="cartbtn" onClick={() => showCarting(true)}>
                { carting ?
                    <div>
                        <Cart />
                        <Backdrop show={carting} set={showCarting} /> 
                    </div>
                : <img className="cartpic header-link" src={cart} alt="heart" /> }
            </div>
            <div className="favoritebtn" onClick={() => showSavedList(true)}>
                { savedList ?
                    <div>
                        <SavedList />
                        <Backdrop show={savedList} set={showSavedList} /> 
                    </div>
                : <img className="favs header-link" src={heart} alt="heart" /> }
            </div>
            <div className="profilebtn" onClick={() => showProfile(true)}>
                { profile ?
                    <div>
                        <Profile />
                        <Backdrop  show={profile} set={showProfile} /> 
                    </div>
                : <img className="account header-link" src={account} alt="head-shot" /> }
            </div>
        </div>
    )
}

export default Header;