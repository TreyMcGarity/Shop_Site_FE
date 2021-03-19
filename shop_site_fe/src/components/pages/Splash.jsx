import React from 'react';
import '../../styles/splash.scss';
import { Link } from "react-router-dom";


const Splash = () => {
    return (
        <div className='splash'>
            <h1>DECOREM</h1>
            <h2>Logo</h2>
            <h2>Slogan</h2>
            <Link classname='login-btn' to='/login'>Login</Link>
            <p>Don't have an account? <Link classname='register-btn' to='register'>Create account</Link></p>
        </div>
    )
}

export default Splash;