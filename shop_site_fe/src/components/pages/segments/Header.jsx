import React, { useState } from 'react';
// import { useDispatch } from "react-redux";
// import { getProduct } from '../redux/actions/productActions';
import Listing from '../../modals/patron-modals/Listing';
import Search from '../../modals/patron-modals/Search';
import Backdrop from '../../../utils/backdrop';
import menu from '../../../utils/images/header/hamburger-menu.png';
import account from '../../../utils/images/header/profile-.png';
import searchIcon from '../../../utils/images/header/search-icon.png';
import cart from '../../../utils/images/header/cart-.png';
import heart from '../../../utils/images/header/fav-heart.png';
import '../../../styles/pages/segemnts/header.scss';

const Header = () => {
    // const dispatch = useDispatch();
    const [listing, showListing] = useState(false);
    const [searching, showSearching] = useState(false);
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
                : <img className="menu header-link" src={menu} alt="menu" /> }
            </div>
            <h1 className='title'>DECOREM</h1>
            <div className='optionalbtn'>
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
            <img className="cartpic header-link" src={cart} alt="heart" /> 
            <img className="favs header-link" src={heart} alt="heart" /> 
            <img className="account header-link" src={account} alt="head-shot" /> 
            </div>
        </div>
    )
}

export default Header;