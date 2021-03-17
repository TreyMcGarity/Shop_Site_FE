import React from 'react';
import Searcher from '../../utils/images/search-icon-other.png'
import X from '../../utils/images/X.png';
import '../../styles/search.scss';

const Search = props => {
    return (
        <div className="searchBar">
            <img className="x" src={Searcher} alt="magnifing glass" onClick={() => {}} />
            <form onSubmit={props.handleSubmit}>
                <input
                    type="text"
                    name="email"
                    placeholder="search"
                    value={props.search}
                    onChange={props.handleChange}
                />
            </form>
            <img className="x" src={X} alt="X" onClick={() => {props.showSearching(false)}} />
        </div>
    )
}

export default Search;