import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
// Redux
import { Provider } from 'react-redux';
import store from 'redux/store.js';

// Pages
import Navbar from './components/navbar.jsx'
import Home from './pages/home.jsx';
import Login from './pages/login.jsx'
import Register from './pages/register.jsx'

const App = () => {
	return (
		<Provider store={store}>
			<Router>
          		<>
                        <Navbar /> 
                          <Switch> 
                            <Route path="/login"> <Login /> </Route> 
                            <Route path="/register"> <Register /> </Route>
                            <Route exact path="/"> <Home /> </Route>
                          </Switch>
                        </>
			</Router>
		</Provider>
	);
};

export default App;
