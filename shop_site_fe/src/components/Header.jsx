import React from 'react';
import { connect } from "react-redux";

const Header = () => {
    return (
        <div>
            Header   
        </div>
    )
}

const mapState = state => {
    return {
		state: state.products.data, 
	};
}

export default connect(mapState, Header);