import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../../redux/actions/authActions';
import LoginForm from './LoginForm';
import Show from '../../../utils/images/login/show_password.png';
import Hide from '../../../utils/images/login/hide_password.png';

const Login = () => {
	const dispatch = useDispatch();
	const [input, setinput] = useState({ username: "", password: "", user_type: "vendor" });
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
        console.log(e.target.value)
		setinput({ ...input, [e.target.name]: e.target.value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(login(input));
	};
	return (
		<LoginForm
			input={input}
			hidden={hidden}
			source={source}
			handleClick={handleClick}
			handleChange={handleChange}
			handleSubmit={handleSubmit}
		/>
	);
};
export default Login;