import React from "react";
import { Link } from "react-router-dom";
import '../../../styles/pages/auth-login.scss';

const LoginForm = (props) => {
    return (
    <div className="login">
        <div className="welcome-message">
            <h1>Login</h1>
            <p>Welcome back! Please login to your account.</p>
        </div>
        <div className="form-container">
            <form onSubmit={props.handleSubmit}>
                <label>Username</label>
                <input
                    type="text"
                    name="username"
                    value={props.input.username}
                    onChange={props.handleChange}
                />
                <label>Password</label>
                <div className="password-container">
                    <input
                        type={props.hidden ? "password" : "text"}
                        name="password"
                        value={props.input.password}
                        onChange={props.handleChange}
                    />
                    <img
                        className="eye"
                        onClick={props.handleClick}
                        src={props.source}
                        alt="eye"
                    />
                </div>
                <button type="submit">Log in</button>
            </form>
            {/* <div className="social-links">
                <Link to="" className="fb">Facebook</Link>
            </div> */}
            <p className="top signup-forgot">
                Don't have an account?
                <Link to="/register">Signup</Link>
            </p>
            <p className="signup-forgot">
                <Link to="/email-request">Forgot Password?</Link>
            </p>
        </div>
    </div>
	)
};

export default LoginForm;