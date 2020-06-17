import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
// Redux
import { Provider } from "react-redux";
import store from "./redux/store.js";

// Pages
import Navbar from "./components/navbar.jsx";
import Home from "./pages/home.jsx";
import CreateEvent from "./pages/createEvent.jsx";
import Login from "./pages/login.jsx";
import Register from "./pages/register.jsx";
import "antd/dist/antd.css";

const App = () => {
	return (
		<Provider store={store}>
			<Router>
				<>
					<Navbar />
					<Switch>
						<Route path="/login">
							{" "}
							<Login />{" "}
						</Route>
						<Route path="/register">
							{" "}
							<Register />{" "}
						</Route>
						<Route exact path="/">
							{" "}
							<Home />{" "}
						</Route>
						<Route exact path="/create-event">
							{" "}
							<CreateEvent />{" "}
						</Route>
					</Switch>
				</>
			</Router>
		</Provider>
	);
};

export default App;
