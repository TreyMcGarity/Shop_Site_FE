import React from 'react';
import LeftArrow from '../../../utils/images/home/left-facing-triangle.png';
import RightArrow from '../../../utils/images/home/right-facing-triangle.png';
import '../../../styles/modals/carousel/carousel.scss';

const Carousel = () => {
    return (
        <div className='carousel'>
            <img src={LeftArrow} alt='left arrow'/>
            <p>New Arrivals</p>
            <p>Popular</p>
            <img src={RightArrow} alt='right arrow'/>
        </div>
    )
}

export default Carousel;