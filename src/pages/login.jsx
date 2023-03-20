import "../App.css";
import React from "react";
import {
	Typography,
	AppBar,
	Toolbar,
	TextField,
	Button,
} from "@material-ui/core";
import "antd/dist/antd.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
	const navigate = useNavigate();
	React.useEffect(() => {
		// First check if there is a token in localStorage
		if (localStorage.getItem("token")) {
			// If there is a token, redirect to home page
			navigate("/");
		}
	}, []);

	const onSubmit = async (e) => {
		// e.preventDefault prevents page from refreshing when form is submitted (default behavior)
		e.preventDefault();
		// get array from localStorage
		const users = JSON.parse(localStorage.getItem("users"));
		// check if user exists in array
		const userExists = users.find(
			(user) =>
				user.username === e.target.username.value &&
				user.password === e.target.password.value
		);
		if (userExists) {
			// if user exists, set token in localStorage
			localStorage.setItem("token", JSON.stringify(userExists));
			// redirect to home page
			navigate("/");
		} else {
			// if user doesn't exist, show error message
			alert("User does not exist");
		}
	};
	const customStyle = {
		margin: "5px",
		marginTop: "10px",
		marginBottom: "10px",
		width: "100%",
		height: "50px",
		borderRadius: "5px",
		fontSize: "16px",
	};

	return (
		<div className="App">
			<AppBar>
				<Toolbar>
					<Typography variant="h6" color="inherit">
						Let's Learn Routes
					</Typography>
				</Toolbar>
			</AppBar>
			<div style={{ marginTop: "90px" }} />

			<Typography variant="h5" color="primary">
				Login
			</Typography>
			<form onSubmit={onSubmit}>
				<TextField
					style={customStyle}
					type="text"
					label="Username"
					variant="outlined"
					name="username"
					required
				/>
				<TextField
					style={customStyle}
					type="password"
					label="Password"
					variant="outlined"
					name="password"
					required
				/>
				<Button
					style={customStyle}
					variant="contained"
					color="primary"
					type="submit">
					Login
				</Button>
			</form>
			<Typography variant="h6" color="primary">
				Already have an account?
			</Typography>
			<Typography variant="h5" color="primary">
				<Link to="/register">Register</Link>
			</Typography>
		</div>
	);
};

export default Login;
