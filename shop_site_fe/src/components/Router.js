import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import Listing from './modals/Listing';
import Profile from './modals/Profile';
import '../styles/router.css';

function Routing() {
  return (
    <Router className="router">
      <Route path='/listing' render={props => <Listing {...props} />} />
      <Route path='/profile' render={props => <Profile {...props} />} />
      <Header />  
      <Home />  
      <Footer />
    </Router> 
  );
}

export default Routing;
