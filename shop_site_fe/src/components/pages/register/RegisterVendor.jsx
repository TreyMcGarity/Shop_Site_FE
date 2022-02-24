import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from '../../../redux/actions/authActions';
import RegisterForm from './RegisterForm';
import Show from "../../../utils/images/login/show_password.png";
import Hide from "../../../utils/images/login/hide_password.png";

const Register = () => {
	const dispatch = useDispatch();
	const [input, setInput] = useState({ 
        username: "", 
        password: "",
        first_name: "",
        last_name: "",
        email: "",
        phone: null,
        dob: null,
        gender: "",
        user_type: "vendor"
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
		setInput({ ...input, [e.target.name]: e.target.value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(register(input));
	};
    return (
        <RegisterForm
            input={input}
            hidden={hidden}
            source={source}
            handleClick={handleClick}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
        />    
    );
};
export default Register;