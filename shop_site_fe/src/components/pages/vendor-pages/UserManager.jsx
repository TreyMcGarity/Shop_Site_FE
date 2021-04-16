import React from 'react';
import { connect, useDispatch, useSelector } from "react-redux";
import '../../../styles/pages/vendor-pages/userManager.scss';

const UserManager = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);

    return (
        <div className='user-manager-page'>
            <h1>User Manager</h1>
        </div>
    )
}

const mapping = (state) => {
    return {
        state: state,
    }
}

export default connect(mapping)(UserManager);