import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";
import "./App.css";
import About from "./Pages/About";
import ErrorPage from "./Pages/ErrorPage";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import UserProfile from "./Pages/UserProfile";

function App() {
	return (
		<>
			<Router>
				<nav>
					<Link to="/">Home</Link>
					<Link to="/about">About</Link>
					<Link to="/profile">Profile</Link>
				</nav>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/home" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/profile/:username" element={<UserProfile />} />
					<Route path="*" element={<ErrorPage />} />
				</Routes>
				<div>This is a footer section</div>
			</Router>
		</>
	);
}

export default App;
