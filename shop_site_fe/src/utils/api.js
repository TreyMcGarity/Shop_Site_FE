import axios from "axios";

export default function apiCall() {
	return axios.create({
		baseURL: process.env.REACT_APP_BACKEND,
	});
}