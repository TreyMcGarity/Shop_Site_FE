import { BrowserRouter as Router } from 'react-router-dom';
import Splash from './pages/Splash';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Home from './pages/patron-pages/Home';
import Dashboard from './pages/vendor-pages/Dashboard';
import ProductManager from './pages/vendor-pages/ProductManager';
import OrderManager from './pages/vendor-pages/OrderManager';
import UserManager from './pages/vendor-pages/UserManager';
import { Route } from "react-router-dom";
// import PrivateRoute from '../utils/PrivateRoute';
import '../styles/router.scss';

function Routing() {
  return (
    <Router className="router">

        <Route 
            exact path="/"
            render={props => <Splash {...props} />}
        />
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
            path="/home"
            render={props => <Home {...props} />}
        />

        <Route 
            path="/dashboard"
            render={props => <Dashboard {...props} />}
        />

        <Route 
            path="/product-manager"
            render={props => <ProductManager {...props} />}
        />

        <Route 
            path="/order-manager"
            render={props => <OrderManager {...props} />}
        />
        
        <Route 
            path="/user-manager"
            render={props => <UserManager {...props} />}
        />
    </Router> 
  );
}

export default Routing;
