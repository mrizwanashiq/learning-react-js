// You can see that we are using `BrowserRouter`, `Routes` and `Route` from the `react-router-dom` library.
import { BrowserRouter, Routes, Route } from "react-router-dom";

// And import pages

import Login from "./pages/login";
import Register from "./pages/register";
import Home from "./pages/home";

// Now let's move to routing.

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} /> // Here we are saying that if the
				path is `/` then display the `Home` component.
				<Route path="/login" element={<Login />} /> // Here we are saying that
				if the path is `/login` then display the `Login` component.
				<Route path="/register" element={<Register />} /> // Here we are saying
				that if the path is `/register` then display the `Register` component.
			</Routes>
		</BrowserRouter>
	);
}

export default App;
