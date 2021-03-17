import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Routes from './Routes';
import '../styles/router.css';

function Routing() {
  return (
    <Router className="router">
      <Header />  
      <Routes />
      <Footer />
    </Router> 
  );
}

export default Routing;
