import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
// Redux
import { Provider } from 'react-redux';
import store from './redux/store.js';

// Pages
import Navbar from './components/layouts/navbar.jsx'
import Footer from './components/layouts/footer.jsx'
import Home from './pages/home.jsx';
import Login from './pages/login.jsx'
import Register from './pages/register.jsx'
import AdminCoachDashboardPage from './pages/adminCoachDashboardPage.jsx'
import TeamList from './components/Team/TeamList.jsx'

const App = () => {
	return (
		<Provider store={store}>
			<Router>
          		<>
                        <Navbar /> 
                          <Switch> 
                            <Route path="/login"> <Login /> </Route> 
                            <Route path="/register"> <Register /> </Route>
                            <Route path="/dashboardAdmin"> <AdminCoachDashboardPage /> </Route>
                            <Route path="/teams"> <TeamList /> </Route>
                            <Route exact path="/"> <Home /> </Route>
                          </Switch>
				<Footer />
                        </>
			</Router>
		</Provider>
	);
};

export default App;
