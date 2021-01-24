import React from 'react';
import '../../styles/listing.css';

const Listing = () => {
    return (
        <div className='listing'>
            Product Listing:
            <button>All</button>
            <button>Wall</button>
            <button>Surface</button>
        </div>
    )
}

export default Listing;