import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import './styles/router.css';

function Routing() {
  return (
    <div>
      <Header />
        <Router className="router">
            <Home />
        </Router>   
      <Footer />
    </div>
  );
}

export default Routing;
