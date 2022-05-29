import React from 'react';
import '../../../styles/modals/patron-modals/listing.scss';

const Listing = () => {
    return (
        <div className='listing'>
            <h1 className='options'>Browse</h1>
            <h1 className='options'>New</h1>
            <h1 className='options'>Popular</h1>
            <h1 className='options'>Women</h1>
            <h1 className='options'>Men</h1>
            <h1 className='options'>Deals</h1>
            <h1 className='options'>Collections</h1>
            <div className='suggestion-contact'>
                <p>Have any great ideas?</p>                
                <form>
                    <input></input>
                </form>
            </div>
        </div>
    )
}

export default Listing;