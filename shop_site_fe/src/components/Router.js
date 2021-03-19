import { BrowserRouter as Router } from 'react-router-dom';
import Splash from './pages/Splash';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Home from './pages/patron-pages/Home';
import Dashboard from './pages/vendor-pages/Dashboard';
import { Route } from "react-router-dom";
// import PrivateRoute from '../utils/PrivateRoute';
import '../styles/router.scss';

function Routing() {
  return (
    <Router className="router">
      {/*  Auth  Routes */}
            <Route 
                path="/login"
                render={props => <Login {...props} />}
            />


            <Route 
                path="/register"
                render={props => <Register {...props} />}
            />

            {/* Page Routes (need to be private when auth working) */}
            <Route 
                exact path="/"
                render={props => <Splash {...props} />}
            />

            <Route 
                path="/home"
                render={props => <Home {...props} />}
            />

            <Route 
                path="/dahsboard"
                render={props => <Dashboard {...props} />}
            />

      {/*
            <PrivateRoute 
                path="/home"
                render={props => <Component {...props} />}
            />

            <PrivateRoute 
                path="/dashboard"
                render={props => <Component {...props} />}
            /> 
      */}
    </Router> 
  );
}

export default Routing;
