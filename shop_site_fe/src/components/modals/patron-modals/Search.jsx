import React from 'react';
import Searcher from '../../../utils/images/header/search-icon-other.png'
import X from '../../../utils/images/header/X.png';
import '../../../styles/modals/patron-modals/search.scss';

const Search = props => {
    console.log(props)
    return (
        <div className="searchBar">
            <img className="x" src={Searcher} alt="magnifing glass" onClick={() => {}} />
            <form onSubmit={props.handleSubmit}>
                <input
                    type="text"
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