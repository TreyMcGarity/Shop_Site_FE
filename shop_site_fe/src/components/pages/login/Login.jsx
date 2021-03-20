import React, { useState } from "react";
// import { useDispatch } from "react-redux";
import Show from "../../../utils/images/login/show_password.png";
import Hide from "../../../utils/images/login/hide_password.png";
import { Link } from "react-router-dom";
import '../../../styles/login/login.scss';

const Login = (props) => {
	// const dispatch = useDispatch();
	const [input, setinput] = useState({ username: "", password: "" });
	const [hidden, setHidden] = useState(true);
	const [source, setSource] = useState(Show);
	const handleClick = () => {
		if (hidden === false) {
			setHidden(true);
			setSource(Show);
		} else {
			setHidden(false);
			setSource(Hide);
		}
	};
	const handleChange = (e) => {
		setinput({ ...input, [e.target.name]: e.target.value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		// dispatch(getLogi(input));
	};
	return (
            <div className="login">
                <div className="welcome-message">
                    <h1>Login</h1>
                    <p>Welcome back! Please login to your account.</p>
                </div>
                <div className="form-container">
                    <form onSubmit={handleSubmit}>
                        <label>Username</label>
                        <input
                            type="text"
                            name="username"
                            value={input.username}
                            onChange={handleChange}
                        />
                        <label>Password</label>
                        <div className="password-container">
                            <input
                                type={hidden ? "password" : "text"}
                                name="password"
                                value={input.password}
                                onChange={handleChange}
                            />
                            <img
                                className="eye"
                                onClick={handleClick}
                                src={source}
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
	);
};
export default Login;