import React from 'react';
import X from '../../utils/images/X.png';
import '../../styles/search.css';

const Search = props => {
    return (
        <div className="searchBar">
            <form onSubmit={props.handleSubmit}>
                <input
                    type="text"
                    name="email"
                    placeholder="search"
                    value={props.search}
                    onChange={props.handleChange}
                />
            </form>
            <img className="x" src={X} alt="X" onClick={() => props.showSearching(false)} />
        </div>
    )
}

export default Search;