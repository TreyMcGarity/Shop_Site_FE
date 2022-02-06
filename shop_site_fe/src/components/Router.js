import { BrowserRouter as Router } from 'react-router-dom';
import Splash from './pages/Splash';
import LoginPatron from './pages/login/LoginPatron';
import LoginVendor from './pages/login/LoginVendor';
import RegisterPatron from './pages/register/RegisterPatron';
import RegisterVendor from './pages/register/RegisterVendor';
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
            render={props => <LoginPatron {...props} />}
        />
        <Route 
            path="/gate"
            render={props => <LoginVendor {...props} />}
        />
            
        <Route 
            path="/register"
            render={props => <RegisterPatron {...props} />}
        />
        <Route 
            path="/craft"
            render={props => <RegisterVendor {...props} />}
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
