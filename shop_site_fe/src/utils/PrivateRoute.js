import React, { useEffect, useState } from "react";
import AxiosWithCreds from "./axoisWithCreds";
import { Route, Redirect } from "react-router";

const PrivateRoute = ({ component: Component, ...rest }) => {
	const [auth, setAuth] = useState({ isAuth: false, ready: false });
	useEffect(() => {
		const checkAuth = async () => {
			try {
				await AxiosWithCreds.get("/auth/verify_session");
				setAuth({
					isAuth: true,
					ready: true,
				});
			} catch (error) {
				setAuth({ ...auth, ready: true });
			}
		};
		checkAuth();
	}, [auth]);
	return (
		<>
			{auth.ready && (
				<Route
					{...rest}
					render={(props) => {
						if (auth.isAuth) {
							return <Component {...props} />;
						}
						return <Redirect to="/" />;
					}}
				/>
			)}
		</>
	);
};

export default PrivateRoute;
