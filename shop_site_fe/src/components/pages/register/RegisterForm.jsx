import React from "react";
import { Link } from "react-router-dom";
import '../../../styles/pages/auth-register.scss';

const RegisterForm = (props) => {
    return (
    <div className="register">
        <div className="welcome-message">
            <h1>Register</h1>
            <p>Please register a new account.</p>
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
                <label>Optional Information:</label>
                <input
                    type="text"
                    name="first_name"
                    placeholder="First Name"
                    value={props.input.first_name}
                    onChange={props.handleChange}
                />
                <input
                    type="text"
                    name="last_name"
                    placeholder="Last Name"
                    value={props.input.last_name}
                    onChange={props.handleChange}
                />
                <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={props.input.email}
                    onChange={props.handleChange}
                />
                <input
                    type="int"
                    name="phone"
                    placeholder="Phone Number"
                    value={props.input.phone}
                    onChange={props.handleChange}
                />
                <input
                    type="date"
                    name="dob"
                    placeholder="Date of Birth"
                    value={props.input.dob}
                    onChange={props.handleChange}
                />
                <input
                    type="text"
                    name="gender"
                    placeholder="Gender"
                    value={props.input.gender}
                    onChange={props.handleChange}
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
	)
};

export default RegisterForm;