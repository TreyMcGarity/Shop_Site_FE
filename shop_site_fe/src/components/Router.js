import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
// import Footer from './Footer';
// import Routes from './Routes';
import { Route } from "react-router-dom";
import PrivateRoute from '../utils/PrivateRoute';
import '../styles/router.scss';

function Routing() {
  return (
    <Router className="router">
      <Header />  
      {
      // <>
        //     {/* Auth  Routes */}
        //     <Route 
        //         path="/login"
        //         render={props => <Component {...props} />}
        //     />


        //     <Route 
        //         path="/register"
        //         render={props => <Component {...props} />}
        //     />

        //     {/* Patron Routes  */}
        //     <PrivateRoute 
        //         path="/home"
        //         render={props => <Component {...props} />}
        //     />


        //     {/* Vendor Routes  */}
        //     <PrivateRoute 
        //         path="/dashboard"
        //         render={props => <Component {...props} />}
        //     />
        // </>
      }
    </Router> 
  );
}

export default Routing;
