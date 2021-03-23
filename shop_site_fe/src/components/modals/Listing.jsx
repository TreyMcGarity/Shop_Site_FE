import React from 'react';
import '../../styles/modals/listing.scss';

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