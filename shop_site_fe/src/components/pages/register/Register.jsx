import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { register } from '../../../redux/actions/authActions';

import Show from "../../../utils/images/login/show_password.png";
import Hide from "../../../utils/images/login/hide_password.png";
import '../../../styles/pages/register/register.scss';

    /*
    data object:
    username, password, confirm password
    first and last name, email, phone, 
    dob, gender, user_type */
const Register = () => {
	const dispatch = useDispatch();
	const [info, setInfo] = useState({ 
        username: "", 
        password: "",
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        dob: "",
        gender: "",
        user_type: "patron"
    });
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
		setInfo({ ...info, [e.target.name]: e.target.value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(register(info));
	};
	return (
            <div className="register">
                <div className="welcome-message">
                    <h1>Register</h1>
                    <p>Please register a new account.</p>
                </div>
                <div className="form-container">
                    <form onSubmit={handleSubmit}>
                        <label>Username</label>
                        <input
                            type="text"
                            name="username"
                            value={info.username}
                            onChange={handleChange}
                        />
                        <label>Password</label>
                        <div className="password-container">
                            <input
                                type={hidden ? "password" : "text"}
                                name="password"
                                value={info.password}
                                onChange={handleChange}
                            />
                            <img
                                className="eye"
                                onClick={handleClick}
                                src={source}
                                alt="eye"
                            />
                        </div>
                        <label>Optional Information:</label>
                        <input
                            type="text"
                            name="first_name"
                            placeholder="First Name"
                            value={info.first_name}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="last_name"
                            placeholder="Last Name"
                            value={info.last_name}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="email"
                            placeholder="Email"
                            value={info.email}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="phone"
                            placeholder="Phone Number"
                            value={info.phone}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="dob"
                            placeholder="Date of Birth"
                            value={info.dob}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="gender"
                            placeholder="Gender"
                            value={info.gender}
                            onChange={handleChange}
                        />
                        <button type="submit">Register</button>
                    </form>
                    <p className="top signup-forgot">
                        Already have an account?
                        <Link to="/login">Login</Link>
                    </p>
                    <p className="signup-forgot">
                        <Link to="/email-request">Forgot Password?</Link>
                    </p>
                </div>
            </div>
	);
};
export default Register;