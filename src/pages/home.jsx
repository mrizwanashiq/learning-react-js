import "../App.css";
import React from "react";
import { Typography, AppBar, Toolbar } from "@material-ui/core";
import "antd/dist/antd.css";
import { Table, Button } from "antd";
import { useNavigate } from "react-router-dom";

const Home = () => {
	const [users, setUsers] = React.useState([]);
	const [loggedInUser, setLoggedInUser] = React.useState(null);
	const navigate = useNavigate();

	React.useEffect(() => {
		// First check if there is a token in localStorage
		if (!localStorage.getItem("token")) {
			// If there is no token, redirect to login page
			navigate("/login");
		} else {
			// If there is a token, get users from localStorage
			const users = JSON.parse(localStorage.getItem("users"));
			// Get logged in user from localStorage
			const loggedInUser = JSON.parse(localStorage.getItem("token"));
			// set users in state
			setUsers(users);
			// set loggedInUser in state
			setLoggedInUser(loggedInUser);
		}
	}, [navigate]);

	const deleteUser = async (username) => {
		// This is to delete the book from the list
		const newUsers = users.filter((user) => user.username !== username);
		setUsers(newUsers);
		localStorage.setItem("users", JSON.stringify(newUsers));
		if (loggedInUser.username === username) {
			localStorage.removeItem("token");
			navigate("/login");
		}
	};

	const logout = () => {
		// This is to logout the user
		localStorage.removeItem("token");
		navigate("/login");
	};

	const columns = [
		{
			title: "Name",
			dataIndex: "name",
			key: "name",
		},
		{
			title: "Username",
			dataIndex: "username",
			key: "username",
		},
		{
			title: "Action",
			key: "action",
			render: (text, record) => (
				<Button color="primary" onClick={() => deleteUser(record.username)}>
					Delete
				</Button>
			),
		},
	];

	return (
		<div className="App">
			<AppBar>
				<Toolbar>
					<div
						style={{
							display: "flex",
							justifyContent: "space-between",
							width: "100%",
						}}>
						<Typography variant="h6" color="inherit">
							Let's Learn Routes
						</Typography>
						<Button onClick={logout}>Logout</Button>
					</div>
				</Toolbar>
			</AppBar>
			<div style={{ marginTop: "90px" }} />
			{loggedInUser && (
				<h2 variant="h5" color="">
					Welcome {loggedInUser.name}!
				</h2>
			)}
			<Typography variant="h5" color="primary">
				Users
			</Typography>
			<Table columns={columns} dataSource={users} />
		</div>
	);
};

export default Home;
