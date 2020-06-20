import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Redux
import { Provider } from "react-redux";
import store from "./redux/store.js";

// Pages
import CreateEvent from "./pages/createEvent.jsx";
import CreateClub from "./pages/createClub.jsx";
import Home from "./pages/home.jsx";
import Login from "./pages/login.jsx";
import Register from "./pages/register.jsx";
import CreateTeam from "./pages/createTeam.jsx";
import AdminCoachDashboardPage from "./pages/adminCoachDashboardPage.jsx";
import ShowTeam from './pages/showTeam.jsx'

//Component 
import Navbar from "./components/layouts/navbar.jsx";
import Footer from "./components/layouts/footer.jsx";

//CSS
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";
import "antd/dist/antd.css";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/login"> <Login /> </Route>
          <Route path="/register"> <Register /> </Route>
          <Route exact path="/create-event"> <CreateEvent /> </Route>
          <Route exact path="/create-club"> <CreateClub /> </Route>
          <Route path={`/clubs/:clubId/team/:teamId`}><ShowTeam /></Route>
          <Route path="/dashboardAdmin"> <AdminCoachDashboardPage /> </Route>
          <Route path="/create-team"> <CreateTeam /> </Route>
          <Route exact path="/"> <Home /> </Route>
        </Switch>
        <Footer />
      </Router>
    </Provider>
  );
};

export default App;
