import React from 'react';
import '../../../styles/pages/patron-pages/carousel-item.scss';

const CarouselItem = (props) => {
    return (
        <a className='CarouselItem'>
            {props.text}
        </a>
    )
}

export default CarouselItem;