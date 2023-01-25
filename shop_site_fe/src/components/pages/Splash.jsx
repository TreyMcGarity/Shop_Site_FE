import React from 'react';
import '../../styles/pages/splash.scss';
import { Link } from "react-router-dom";


const Splash = () => {
    return (
        <div className='splash'>
            <h1>DECOREM</h1>
            <h2>Logo</h2>
            <h2>Put the Mmm in Decor</h2>
            <p> Redirect to <Link to='/home'>Homepage</Link></p>
            <Link className='login-btn' to='/login'>Login</Link>
            <p>Don't have an account? <Link className='register-btn' to='register'>Create account</Link></p>
        </div>
    )
}

export default Splash;