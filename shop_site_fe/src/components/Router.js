import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import '../styles/router.css';

function Routing() {
  return (
    <Router className="router">
      <Header />  
      <Home />  
      <Footer />
    </Router> 
  );
}

export default Routing;
