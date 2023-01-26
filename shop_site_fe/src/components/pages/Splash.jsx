import React from 'react';
import '../../styles/pages/splash.scss';
import { Link } from "react-router-dom";


const Splash = () => {
    return (
        <div className='splash'>
            <h1 className='title'>Decorem</h1>
            <h3>Get more for your Decor!</h3>
            <p>Redirect to <Link to='/home'>Homepage</Link></p>
            <p>Welcome back! <Link className='login-btn' to='/login'>Login</Link></p>
            <p>Don't have an account? <Link className='register-btn' to='register'>Create account</Link></p>
        </div>
    )
}

export default Splash;