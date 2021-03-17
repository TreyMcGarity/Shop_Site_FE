import React from 'react';
import '../styles/backdrop.scss';

const Backdrop = (props) => {
    return (
        <div 
        className={props.show ? 'backdrop':'backdrop-closed'}
        onClick={(event)=> {
            event.cancelBubble = true;
            event.stopPropagation();
            props.set(false)
            }}>
        </div>
    );
}

export default Backdrop;