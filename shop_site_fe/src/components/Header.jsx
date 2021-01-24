import React, { useState } from 'react';
// import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
// import { getProduct } from '../redux/actions/productActions';
import '../styles/header.css';

const Header = () => {
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
                <Link to='/listing'>Listing</Link>
            </div>
            <div>
                <Link to='/profile'>Profile</Link>
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